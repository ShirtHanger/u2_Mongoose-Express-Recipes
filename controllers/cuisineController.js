/* Here's how you import the cuisines database into our controller */

// If only ONE item type, you can do this 
// const Cuisine = require('../models/cuisine');

const { Direction, Recipe, Cuisine } = require('../models')

// INDEX - app.get
const getAllCuisines = async (req, res) => {
    /* try-catch is like an if else statement, prints an error on else */
    try {
        const cuisines = await Cuisine.find()
        res.json(cuisines) /* Sends data in json format */
    } catch (error) {
        return res.status(500).send(error.message)
    }
}
// SHOW - app.get
getCuisineById = async (req, res) => {
    try {
        const { id } = req.params
        const cuisine = await Cuisine.findById(id)
        if (cuisine) {
            return res.json(cuisine)
        } return res.status(404).send(`Cuisine with id of ${id} not found!`) // Technically an else statement
    } catch (error) {
        if (error.name === 'CastError' && error.kind === 'ObjectId') { /* Higher order error handling */
            return res.status(404).send(`That cuisine doesn't exist`)
        }
        return res.status(500).send(error.message)
    }
}

// CREATE - app.post
const createCuisine = async (req, res) => {
    try {
        const cuisine = await new Cuisine(req.body) /* Enables ability to update via tools like Thunderclient */
        await cuisine.save()
        return res.status(201).json({cuisine});
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}
// UPDATE - app.put (Most complex function, causes most problems)
const updateCuisine = async (req, res) => {
    try {
        let { id } = req.params;
        let cuisine = await Cuisine.findByIdAndUpdate(id, req.body, 
            { new: true }) /* new: true, reloads page, shows NEW page */
        if (cuisine) {
            return res.status(200).json(cuisine)
        }
        throw new Error("Cuisine not found")
    } catch (error) {
        return res.status(500).send(error.message);
    }
}
// DELETE - app.delete
const deleteCuisine = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Cuisine.findByIdAndDelete(id) /* Simply deletes the matching item */
        if (deleted) {
            return res.status(200).send("Cuisine deleted");
        }
        throw new Error("Cuisine not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    getAllCuisines,
    getCuisineById,
    createCuisine,
    updateCuisine,
    deleteCuisine
}