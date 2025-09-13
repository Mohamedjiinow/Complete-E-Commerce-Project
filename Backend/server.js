const express = require ("express")
const mongoose = require ("mongoose")
const cors = require("cors")


const postRouter = require("./Router/productrouter")
const customerRouter = require("./Router/cuctomerRouter")
const orderRouter = require("./Router/OrderRouter")
const adminRouter = require("./Router/adminrouter")

const app = express()
app.use(cors())
app.use(express.json())


mongoose.connect("mongodb://localhost:27017/lastproject").then(()=> console.log("sucesseful"))

app.use(postRouter)
app.use(customerRouter)
app.use(orderRouter)
app.use(adminRouter)
app.use("/allimages", express.static("images"))



app.listen(9000,()=>console.log(`server is running`))