const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

//--------method get all users--------------
router.get("/allUsers", userController.allUser);
//--------method get an user----------------
router.get("/anUser/:id", userController.anUser);
//---------method post a new user-------------
router.post("/newUser", userController.newUser);
//-------------method update an user---------------
router.put("/updateUser/:id", userController.updateUser);
//--------------method delete an user------------------
router.delete("/deleteUser/:id", userController.deleteUser);

module.exports = router;