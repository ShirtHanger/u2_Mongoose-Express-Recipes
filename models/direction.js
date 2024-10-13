const { Schema } = require('mongoose')

const directionSchema = new Schema(
  {
    author: { type: String, required: false },
    source_url: { type: String, required: true },

    /* I decided to move "Ingredient amounts" to recipe schema */

    cooking_instructions: {
      short: { type: String, required: false },
      verbose: { type: String, required: false },
    },
    
    recipe_id: { type: Schema.Types.ObjectId, ref: 'Recipe' },
    
  },
  { timestamps: true }
)

module.exports = directionSchema