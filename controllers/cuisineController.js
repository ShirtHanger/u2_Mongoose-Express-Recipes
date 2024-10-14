/* Here's how you import the cuisines database into our controller */

// If only ONE item type, you can do this 
// const Cuisine = require('../models/cuisine');

const { Direction, Recipe, Cuisine } = require('../models')
const { addListener } = require('../models/direction')

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

/* ================== */

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

/* =================================

Here are the functions I made myself, as alternate search methods

====================================

*/

/* Returns every cuisine that matches the name/culture/region from search Result 
("Soul" will return "Soul Food") */

// http://localhost:3001/cuisines/name-search/:userSearch

getCuisineNameSearch = async (req, res) => {
    try {
        const userSearch = req.params.userSearch.toLowerCase()
        const cuisines = await Cuisine.find()
        let output = []

        for (cuisine of cuisines) {
            if (cuisine.cuisine_name.toLowerCase().includes(userSearch)) {
                output.push(cuisine)
            } 
        }

        if (output) {
            return res.json(output)
        } return res.status(404).send(`No results for "${userSearch}" in Cuisines!`)
    } catch (error) {
        if (error.name === 'CastError' && error.kind === 'ObjectId') {
            return res.status(404).send(`That cuisine doesn't exist`)
        }
        return res.status(500).send(error.message)
    }
}

/* Same as above but includes contents of culture and region array, as well as description
("Afri" will return Soul Food and Jamacian) */

getCuisineDetailSearch = async (req, res) => {
    try {
        const userSearch = req.params.userSearch.toLowerCase()
        const cuisines = await Cuisine.find()
        let output = []

        for (cuisine of cuisines) {

            /* Took me a while to realize I had to redefine INSIDE of the loop */

            /* Forced myself to figure out .map for this specifically :( */

            /* This creates new array in lowercase, for proper searches within array */

            let cultures = cuisine.cultures.map(culture => 
                culture.toLowerCase())
            let regions = cuisine.regions.map(region => 
                region.toLowerCase())


                /* Asked ChatGPT how to make partial searches in arrays return "True" */
                /* .some will return true even if the string is not EXACT, which is what I want */
                /* This is how that Superhero API worked */

            if (cuisine.cuisine_name.toLowerCase().includes(userSearch) 
                || cultures.some(culture => culture.includes(userSearch))
                || regions.some(culture => culture.includes(userSearch))) {
                output.push(cuisine)
            } 
        }

        if (output) {
            return res.json(output)
        } return res.status(404).send(`No results for "${userSearch}" in Cuisines!`)
    } catch (error) {
        if (error.name === 'CastError' && error.kind === 'ObjectId') {
            return res.status(404).send(`That cuisine doesn't exist`)
        }
        return res.status(500).send(error.message)
    }
}


module.exports = {
    getAllCuisines,
    getCuisineById,
    createCuisine,
    updateCuisine,
    deleteCuisine,
    
    getCuisineNameSearch,
    getCuisineDetailSearch
}