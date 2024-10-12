const mongoose = require('mongoose')

const directionSchema = require('./direction')
const recipeSchema = require('./recipe')
const cuisineSchema = require('./cuisine')

const Direction = mongoose.model('Direction', directionSchema)
const Recipe = mongoose.model('Recipe', recipeSchema)
const Cuisine = mongoose.model('Cuisine', cuisineSchema)

module.exports = {
  Direction,
  Recipe,
  Cuisine
}