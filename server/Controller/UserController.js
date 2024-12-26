const User = require("../Model/User");

const UserController = {
    getusers: async(req, res) => {
        try{
            const alluser = await User.find()
            return res.json({ Result: alluser })
        }
        catch(err){
            console.log(err)
        }
    }
};

module.exports = UserController;