const ordermodel = require("../modals/ordermodel")
const productmodel =require("../modals/productschema")

const createOrder=  async(req, res)=>{
    const {customer, products}=req.body

    if(!products || products.length ===0){
    
        return res.status(400).json({message:"product is required"})
    }
    let TotalAmount= 0
    let order=[]
    for(let items of products){
        const productData= await productmodel.findById(items.productid)

        if(!productData){
            return res.status(400).json({message:"this product is not found"})
        }
        let price = productData.price
        let Total = price*items.quantity
        TotalAmount += Total

        if(items.quantity > productData.quantity){
            return res.status(400).json({message:"this product is Out Of Stock"})
    
        }

        productData.quantity -= items.quantity
        await  productData.save()

        order.push({
            productid: productData._id,
            quantity: items.quantity,
            price,
            Total
        })
    }

    const newData = new ordermodel({
        customer,
        products: order,
        TotalAmount
    })

    await newData.save()
    res.send(newData)
}

module.exports= {createOrder}