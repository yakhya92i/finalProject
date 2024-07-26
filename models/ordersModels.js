const mongoose = require('mongoose'); // Importation de la bibliothèque mongoose pour la gestion des modèles et la connexion à MongoDB

// Définition du schéma pour les commandes (orders)
const ordersSchema = new mongoose.Schema({
  // Champ refOrders qui accepte uniquement les valeurs 'petroleum' ou 'gas' et qui est requis
  refOrders: { type: String, enum: ['petroleum', 'gas'], required: true },
  
  // Champ product qui est une référence à un document de la collection Product
  product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
  
  // Champ descriptionOrders qui est une chaîne de caractères
  descriptionOrders: String
}, { timestamps: true }); // Ajout des champs createdAt et updatedAt automatiquement gérés par mongoose

// Exportation du modèle mongoose pour la collection 'orders' basé sur le schéma ordersSchema
module.exports = mongoose.model('orders', ordersSchema);
