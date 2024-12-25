const AuthController = {
    signup: async (req, res) => {
        try{
            const {
                username,
                email,
                password
            } = req.body

            
        }
        catch(err){
            console.log(err)
        }
    }
};

module.exports = AuthController;