
const express = require('express') 
const PORT = process.env.PORT || 3001
// const cors = require('cors')
const db = require('./db')
// Insert your database schema files here (??)
const { Direction, Recipe, Cuisine } = require('./models')

/* Optional (?), for logging functionality */
const bodyParser = require('body-parser')
const logger = require('morgan')

const cuisineController = require('./controllers/cuisineController')
const recipeController = require('./controllers/recipeController')
const directionController = require('./controllers/directionController')
// require() imports and middleware here ^ ///////

const app = express() 

// app.use(cors())
// app.use(express.json())
// app.use(express.urlencoded({ extended: false }))

/* Optional (?), for logging functionality */
app.use(logger('dev'))
app.use(bodyParser.json())
// app.use() middleware here ^ ///////////////////

app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`)
})

app.get('/', (req, res)=> { // request and response arguements
    res.send(`Hello there! Welcome to ShirtHanger's Cuisine and Recipe API!`)
})













// INDEX - app.get
app.get('/cuisines', cuisineController.getAllCuisines)
// SHOW - app.get
app.get('/cuisines/:id', cuisineController.getCuisineById)
app.get('/cuisines/name-search/:userSearch', cuisineController.getCuisineNameSearch)
app.get('/cuisines/detail-search/:userSearch', cuisineController.getCuisineDetailSearch)
// CREATE - app.post

app.post('/cuisines', cuisineController.createCuisine) 
// UPDATE - app.put
app.put('/cuisines/:id', cuisineController.updateCuisine)
// DELETE - app.delete
app.delete('/cuisines/:id', cuisineController.deleteCuisine)

/* body-parser is needed for CRUD stuff (?) */
/* Browser can only GET, we need tools to do full CRUD */
/* Create stuff with ThunderClient or something similar */

// INDEX - app.get
app.get('/recipes', recipeController.getAllRecipes)
// SHOW - app.get
app.get('/recipes/:id', recipeController.getRecipeById)
app.get('/recipes/name-search/:userSearch', recipeController.getRecipeNameSearch)
app.get('/recipes/detail-search/:userSearch', recipeController.getRecipeDetailSearch)
// CREATE - app.post

app.post('/recipes', recipeController.createRecipe) 
// UPDATE - app.put
app.put('/recipes/:id', recipeController.updateRecipe)
// DELETE - app.delete
app.delete('/recipes/:id', recipeController.deleteRecipe)

/* body-parser is needed for CRUD stuff (?) */
/* Browser can only GET, we need tools to do full CRUD */
/* Create stuff with ThunderClient or something similar */

// INDEX - app.get
app.get('/directions', directionController.getAllDirections)
// SHOW - app.get
app.get('/directions/:id', directionController.getDirectionById)
app.get('/directions/author-search/:userSearch', directionController.getDirectionAuthorSearch)
// CREATE - app.post

app.post('/directions', directionController.createDirection) 
// UPDATE - app.put
app.put('/directions/:id', directionController.updateDirection)
// DELETE - app.delete
app.delete('/directions/:id', directionController.deleteDirection)

/* body-parser is needed for CRUD stuff (?) */
/* Browser can only GET, we need tools to do full CRUD */
/* Create stuff with ThunderClient or something similar */











app.get('/middleware', (req, res, next) => {
    console.log('middleware is working') // Next will run THIS CODE first BEFORE the response is sent
    next()
},
    (req, res) => /* Must restart req and res */
        {res.send('response complete')}
)

app.get('/*', (req, res)=> {
    res.send({
       error: '404 file not found'
    })
})