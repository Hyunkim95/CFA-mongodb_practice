var express = require('express');
var router = express.Router();

const Ingredient = require('../models/Ingredient');
const ingredientController = require('../controllers/ingredientController');

/* GET home page. */
// request is what we are sending
// response is what are receiving
router.get('/ingredient/:id/edit', (req, res) => {
  Ingredient.findOne({ _id: req.params.id })
    .then(ingredient => {
      res.render('edit',  {ingredient: ingredient});
    })
});

router.get('/', ingredientController.getIngredient);

router.post('/', (req,res)=>{
  const name = req.body.ingredient_name;
  let ingredient = new Ingredient();
  ingredient.name = name;
  ingredient.save()
    .then(()=>{
      res.redirect('/')
    })
})


router.post('/ingredient/:id/edit', (req,res) =>{
  console.log('req.body:', req.body);
  Ingredient.findOneAndUpdate({ _id: req.params.id }, req.body
    ,{
      new: true
  })
  .then(ingredient =>{
    res.redirect('/')
  })
})

module.exports = router;
