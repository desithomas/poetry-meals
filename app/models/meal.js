/**
 * This needs a schema for the meals 
 * mealType - string
 * mealDate  - date 
 * mealPoem - string
 * mealAcquired -string
 * mealIngredients - string
 * mealRating - number 
 * 
 * this needs mongoose, mongoose needs a schema and the schema. needs a model 
 */


//load the things we need
const mongoose = require('mongoose')


//define the schema for our user model 
const mealSchema = mongoose.Schema({
    mealType: {
       type: String, 
       required: true,    
    }, 
    mealDate: {
        type: Date, 
        required: true,
    }, 
    mealPoem: {
        type: String, 
        required: true,
        }, 
    mealAcquired: {
        type: String, 
        required: true,
    }, 
    mealIngredients: {
        type: String, 
        required: true,
    }, 
    mealRating: {
        type: Number, 
        required: true,
        min: 1, 
        max: 5
    }
})

//export the model aka create the model for users and expose it to our app
module.exports = mongoose.model('Meal', mealSchema)