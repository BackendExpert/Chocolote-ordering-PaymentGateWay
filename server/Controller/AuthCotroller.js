const User = require("../Model/User");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const AuthController = {
    signup: async (req, res) => {
        try{
            const {
                username,
                email,
                password,
                address
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
                    address: address
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
                    const token = jwt.sign({ id: chechUser._id }, process.env.JWT_SECRET);
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
    }
};

module.exports = AuthController;