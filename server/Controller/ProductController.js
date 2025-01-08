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
            } = req.body

            const imageUrl = req.file ? req.file.path : null;

            const checkProduct = await Product.findOne({ productID: ProductID})

            if(!checkProduct){
                return res.json({ Error: "The Product is not exists by Given ID"})
            } 

            // Object to hold the updates
            const updates = {};

            // Add fields to updates object only if they are provided in the request
            if (productName) updates.productName = productName;
            if (productDesc) updates.description = productDesc;
            if (productPrice) updates.price = productPrice;
            if (productStock) updates.stockQuantity = productStock;  // Handle if stock is provided
            if (productBrand) updates.brand = productBrand;
            if (productWeight) updates.weight = productWeight;
            if (imageUrl) updates.imageUrl = imageUrl;

            // Ensure there are updates to make
            if (Object.keys(updates).length === 0) {
                return res.status(400).json({ Error: "No fields to update" });
            }

            if (Number(updates.stockQuantity) === 0) {
                updates.status = "Out of Stock";
            } else {
                updates.status = "In Stock";
            }


            // Update the product
            await Product.updateOne({ productID: ProductID }, { $set: updates });

            return res.json({ Status: "Success", UpdatedFields: updates });
        }
        catch(err){
            console.log(err)
        }
    }
};

module.exports = ProductController;