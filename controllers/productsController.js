const Product = require("../models/productsModel");

//-----------------------------création d'un produit-----------------------------------
module.exports.newProduct = async (req, res) => {
const { name, description, type, quantity, unit } = req.body;
try {
const product = await Product.create({ name, description, type, quantity, unit });
res.status(201).json(product);
} catch (err) {
res.status(500).json({ message: `Aww!!! ${err}` });
}
};

//-------------------------------Trouver tous les produits------------------------------------
module.exports.allProduct = async (req, res) => {
try {
const products = await Product.find();
res.status(201).json(products);
} catch (err) {
res.status(500).json({ message: `Aww!!! ${err}` });
}
};

//----------------------------Trouver un produit par son id----------------------------------------
module.exports.anProduct = async (req, res) => {
try {
const product = await Product.findById(req.params.id);
res.status(201).json(product);
} catch (error) {
res.status(500).json({ message: `Aww!!! ${error}` });
}
};

//---------------------------trouver et modifier un produit--------------------------------------
module.exports.updateProduct = async (req, res) => {
try {
const product = await Product.findOneAndUpdate(
    { _id: req.params.id },
    {
    $set: {
        name: req.body.name,
        description: req.body.description,
        type: req.body.type,
        quantity: req.body.quantity,
        unit: req.body.unit,
    },
    },
    { new: true }
);
res.status(201).json(product);
} catch (error) {
res.status(500).json({ message: `Aww!!! ${error}` });
}
};

//-----------------------------supprimer un produit----------------------------------------------
module.exports.deleteProduct = async (req, res) => {
try {
const product = await Product.findByIdAndDelete(req.params.id);
res.status(201).json({ message: `Product removed: ${product}` });
} catch (error) {
res.status(500).json({ message: `Aww!!! ${error}` });
}
};