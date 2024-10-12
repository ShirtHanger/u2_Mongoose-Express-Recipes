const { Schema } = require('mongoose')

const directionSchema = new Schema(
  {
    name: { type: String, required: true },
    age: { type: Number, required: true },
    gender: {type: String, required: true},
    past_location: {
        name: { type: String, required: true },
        country: { type: String, required: true }
    },
    recipe_id: { type: Schema.Types.ObjectId, ref: 'Recipe' },
  },
  { timestamps: true }
)

module.exports = directionSchema