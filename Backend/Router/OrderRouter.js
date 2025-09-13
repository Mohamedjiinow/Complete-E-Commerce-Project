const express = require ("express")
const router = express.Router()

const ordermodel = require("../controller/OrderControll")

router.post("/create/order", ordermodel.createOrder)
module.exports = router