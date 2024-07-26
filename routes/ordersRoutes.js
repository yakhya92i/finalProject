const express = require("express");
const router = express.Router();
const ordersController = require("../controllers/ordersController");

//--------method get all Products--------------
router.get("/allOrders", ordersController.allProduct);
//--------method get an orders----------------
router.get("/anOrders/:id", ordersController.anProduct);
//---------method post a new orders-------------
router.post("/newOrders", ordersController.newProduct);
//-------------method update an orders---------------
router.put("/updateOrders/:id", ordersController.updateProduct);
//--------------method delete an orders------------------
router.delete("/deleteOrders/:id", ordersController.deleteProduct);

module.exports = router;