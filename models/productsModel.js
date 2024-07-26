const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  type: { type: String, enum: ['petroleum', 'gas'], required: true },
  quantity: { type: Number, required: true },
  unit: { type: String, required: true },
  dateAdded: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Product', productSchema);