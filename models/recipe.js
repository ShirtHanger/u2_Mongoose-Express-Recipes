const { Schema } = require('mongoose')

const recipeSchema = new Schema(
  {
    name: { type: String, required: true },
    age: { type: Number, required: true },
    genders: [{type: String, required: true}],
    cuisine_id: { type: Schema.Types.ObjectId, ref: 'Cuisine' },
  },
  { timestamps: true }
)

module.exports = recipeSchema