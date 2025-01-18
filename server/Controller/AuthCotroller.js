const User = require("../Model/User");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const crypto = require('crypto');
const PwdResetToken = require("../Model/PwdResetToken");
const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
    },
});

const AuthController = {
    signup: async (req, res) => {
        try{
            const {
                username,
                email,
                password,
            } = req.body

            const checkUser = await  User.findOne(
                {
                    $or: [
                        { username: username },
                        { email: email },
                    ]
                }
            )

            if(checkUser){
                return res.json({ Error: 'Given User Credentials Already exists...'})
            }
            else{
                const hashPass = await bcrypt.hash(password, 10)

                const newUser = new User({
                    username: username,
                    email: email,
                    password: hashPass,
                })

                const resultUser = await newUser.save()

                if(resultUser){
                    return res.json({ Status: "Success"})
                }
                else{
                    return res.json({ Error: "User cannot be Created..."})
                }
            }
        }
        catch(err){
            console.log(err)
        }
    },
    signin: async(req, res) => {
        try{
            const {
                email,
                password
            } = req.body

            const chechUser = await User.findOne({ email: email })

            if(!chechUser){
                return res.json({ Error: "Given user Credentials cannot be Authenticated"})
            }
            else{
                const chechPass = await bcrypt.compare(password, chechUser.password)

                if(chechPass){
                    const token = jwt.sign({ id: chechUser._id, role:chechUser.role }, process.env.JWT_SECRET);
                    return res.json({ Status: "Success", Result: chechUser, Token: token })
                }
                else{
                    return res.json({ Error: "Password Not Match..."})
                }
            }

        }
        catch(err){
            console.log(err)
        }
    },

    passreset: async(req, res)=> {
        try{
            const {
                email
            } = req.body

            const checkuser = await User.findOne({ email: email })

            if(!checkuser){
                return res.json({ Error: "No user Found accroding to the givien Email..."})
            }

            else{
                const resetToken = crypto.randomBytes(32).toString('hex');
                const resetTokenHash = crypto.createHash('sha256').update(resetToken).digest('hex');
                
                const newPWTToken = new PwdResetToken({
                    email: email,
                    token: resetTokenHash,                    
                })

                const resultToken = await PwdResetToken.save()

                const resetUrl = `${process.env.APP_PROTOCOL}://${process.env.APP_HOST}/ResetPassword/${resetToken}`;

                if(resultToken){
                    const mailOptions = {
                        from: process.env.EMAIL_USER,
                        to: email,
                        subject: "Password Reset",
                        html: `<h1>Password Reset Link</h1>
                                <p>Password Reset Token: ${resetUrl}</p>
                                <p>Thank you</p>
                                <p>Admin</p>
                        `
                    };
                    await transporter.sendMail(mailOptions);
                    return res.json({ Status: "Success"})
                }
                else{
                    return res.json({ Error: "Internal Server Error" })
                }
                
            }
        }
        catch(err){
            console.log(err)
        }
    }
};


module.exports = AuthController;