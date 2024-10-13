const { Schema } = require('mongoose')

const cuisineSchema = new Schema(
  {
    cuisine_name: { type: String, required: true },
    cultures: [{ type: String, required: true }],
    regions: [{ type: String, required: true }], 
    common_ingredients: [{ type: String, required: false }], /* cornmeal, pork, oxtail, miso, tomato, vinager, mushrooms, basil, olive oil, cheese */
    cooking_methods: [{ type: String, required: false }],
    staple_foods: [{ type: String, required: false }], /* rice, fried chicken, black eyed peas, pasta, */
    famous_dishes: [{ type: String, required: false }], /* Sushi, pizza, cornbread, baked mac and cheese, oxtail */
    spice_level: { type: String, required: true }, /* none, small, medium, spicy */
    serving_style: { type: String, required: false }, /* (large shared platter, appetizer then main course then dessert, large shared platter) */
    cuisine_category: { type: String, required: true }, /* (Medditeranian, African Diaspora, East Asian) */
  },
  { timestamps: true }
)

module.exports = cuisineSchema