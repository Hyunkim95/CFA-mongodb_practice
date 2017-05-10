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

exports.editIngredient = (req, res) => {
  Ingredient.findOne({ _id: req.params.id })
    .then(ingredient => {
      res.render('edit',  {ingredient: ingredient});
    })
}

exports.createIngredient = (req,res) => {
  const name = req.body.ingredient_name;
  let ingredient = new Ingredient();
  ingredient.name = name;
  ingredient.save()
    .then(()=>{
      res.redirect('/')
    })
  }

exports.updateIngredient = (req, res) => {
    // console.log('req.body:', req.body);
    Ingredient.findOneAndUpdate({ _id: req.params.id }, req.body
      ,{
        new: true
    })
    .then(ingredient =>{
      res.redirect('/')
    })
}

exports.deleteIngredient = (req, res) => {
  Ingredient.findOne({ _id: req.params.id })
    .then(ingredient => {
      ingredient.remove()
        .then(()=>{
          res.redirect('/')
        })
    })
}

exports.sendApi = (req,res) =>{
  Ingredient.findOne({ _id: req.params.id})
    .then(ingredient => {
      res.json(ingredient)
    })
}
