const { Schema } = require('mongoose')

const cuisineSchema = new Schema(
  {
    country: { type: String, required: true },
    religions: [{ type: String, required: true }], /* Array of Strings, put this in Other Schemas */
    moral_codes: {
        code_name: { type: String, required: true },
        description: { type: String, required: true }
      }, /* Nested Object, Put in Directions Schema */
  },
  { timestamps: true }
)

module.exports = cuisineSchema