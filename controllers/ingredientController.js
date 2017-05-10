const mongoose = require('mongoose');
const Ingredient = require('../models/Ingredient');

exports.getIngredient = (req,res) => {
  Ingredient.find()
    .then((ingredients) => {
      res.render('index', {
        title: 'Ingredients',
        ingredients: ingredients
      });
    });
}
