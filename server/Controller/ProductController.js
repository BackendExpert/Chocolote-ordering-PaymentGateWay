const Product = require("../Model/Product");

const ProductController = {
    prodcutCreate: async(req, res) => {
        try{
            const { 
                productName,
                productID,
                description,
                price,
                stockQuantity,
                brand,                
                weight,
                status
            } = req.body

            const image = req.file.path

            const chechProduct = await Product.findOne({ productID: productID })

            if(chechProduct){
                return res.json({ Error: "This Product Already exists..."})
            }

            const newProduct = new Product({
                productName: productName,
                productID: productID,
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
    },
    getAllProduct: async(req, res) => {
        try{
            const AllProdcutsAdmin = await Product.find()

            return res.json({ Result: AllProdcutsAdmin})
        }
        catch(err){
            console.log(err)
        }
    },

    GetOneProduct: async(req, res) => {
        try{
            const ProductID = req.params.id

            const getProduct = await Product.findOne({ productID: ProductID })

            return res.json({ Result: getProduct})
        }
        catch(err){
            console.log(err)
        }
    },
    UpdateProduct: async(req, res) => {
        try{
            const ProductID = req.params.id;
            const {
                productName,
                productDesc,
                productPrice,
                productStock,
                productBrand,
                productWeight,
                productImage
            } = req.body

            const checkProduct = await Product.findOne({ productID: ProductID})

            if(checkProduct){
                return res.json({ Error: "The Product is not exists by Given ID"})
            }
            
            

            return res.json({ Status: "Success"})
        }
        catch(err){
            console.log(err)
        }
    }
};

module.exports = ProductController;