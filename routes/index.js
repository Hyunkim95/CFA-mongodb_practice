var express = require('express');
var router = express.Router();

const Ingredient = require('../models/Ingredient');
const ingredientController = require('../controllers/ingredientController');

/* GET home page. */
// request is what we are sending
// response is what are receiving
router.get('/ingredient/:id/edit', ingredientController.editIngredient);

router.get('/', ingredientController.getIngredient);

router.post('/', ingredientController.createIngredient);

router.post('/ingredient/:id/edit', ingredientController.updateIngredient);

router.get('/destroy/:id', ingredientController.deleteIngredient);

router.get('/api/:id', ingredientController.sendApi)

module.exports = router;
