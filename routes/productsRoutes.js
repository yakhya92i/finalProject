const express = require("express");
const router = express.Router();
const productsController = require("../controllers/productsController");

//--------method get all Products--------------
router.get("/allProducts", productsController.allProduct);
//--------method get an Products----------------
router.get("/anProducts/:id", productsController.anProduct);
//---------method post a new Products-------------
router.post("/newProducts", productsController.newProduct);
//-------------method update an Products---------------
router.put("/updateProducts/:id", productsController.updateProduct);
//--------------method delete an Products------------------
router.delete("/deleteProducts/:id", productsController.deleteProduct);

module.exports = router;