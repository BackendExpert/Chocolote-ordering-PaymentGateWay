const User = require("../Model/User");

const AuthController = {
    signup: async (req, res) => {
        try{
            const {
                username,
                email,
                password,
                address
            } = req.body

            const checkUser = await User.findOne({ email: email })

            if(checkUser){
                return res.json({ Error: 'Given User Credentials Already exists...'})
            }
            else{
                const hashPass = await bcrypt.hash(userPass, 10)

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
    }
};

module.exports = AuthController;