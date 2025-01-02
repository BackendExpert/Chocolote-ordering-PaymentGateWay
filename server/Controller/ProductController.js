const ProductController = {
    prodcutCreate: async(req, res) => {
        try{
            const { 
                productName,
                description,
                price,
                stockQuantity,
                brand,
                imageUrl,
                weight,
                status
            } = req.body

            



            // return res.json({ Status: "Success"})
        }
        catch(err){
            console.log(err)
        }
    }
};

module.exports = ProductController;