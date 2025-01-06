const Product = require("../Model/Product");

const ProductController = {
    prodcutCreate: async(req, res) => {
        try{
            const { 
                productName,
                description,
                price,
                stockQuantity,
                brand,                
                weight,
                status
            } = req.body

            const image = req.file.path

            const chechProduct = await Product.findOne({ productName: productName })

            if(chechProduct){
                return res.json({ Error: "This Product Already exists..."})
            }

            const newProduct = new Product({
                productName: productName,
                description: description,
                price: price,
                stockQuantity: stockQuantity,
                brand: brand,
                weight: weight,
                imageUrl: image,
            })

            const resultProduct = await newProduct.save()

            if(resultProduct){
                return res.json({ Status: "Success"})                
            }
            else{
                return res.json({ Error: 'Internel Server Error While Creating Product'})
            }       
        }
        catch(err){
            console.log(err)
        }
    }
};

module.exports = ProductController;