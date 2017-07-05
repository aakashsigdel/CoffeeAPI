const mongoose = require('mongoose');

const Schema = mongoose.Schema;

coffeeSchema = Schema({
  title: String,
  ingredients: [{name: String, amount: {type: String, default: null}}],
  description: String,
  perfect_pull: {type: String, default: null},
  variation: {type: String, default: null},
  image: String
});

module.exports = mongoose.model('coffee', coffeeSchema);
