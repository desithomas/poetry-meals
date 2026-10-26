/*
///////////////////////////////////////////////////
PSEUDOCODE/NOTES/THINKING AREA 

what is the routes.js doing? What is its purpose?
    -has the different webpages that a user is going to visit; the urls they are visiting
    -has the crud commands
        *get 
        *put 
        *post 
        *delete

req and res are just objects. req is the information being requested/coming from the browser 
res is what the server is sending back to the browser

//////////////////////////////////////////////////
*/

//load the meals modeule before the export; Meal is repping the model in meal.js
const Meal = require('./models/meal.js')

module.exports = function(app, passport, db){

//normal routes

//show the home page which also has the login links 
app.get('/', (req, res) => {
    res.render('index.ejs')
})

//regular webpage routes/pages 
app.get('/meals/new', isLoggedIn, (req, res) => {
    res.render('addmeals.ejs')
})

//redirect: send person to another page
app.post('/meals/new', isLoggedIn, (req, res) => {
    //think of where you want your users to go after they submit the form
    //res.redirect('/meals')
    console.log(req.body)
       Meal.create(req.body, (error, savedMeal) => {
        if (error) //savedMeals is the meal document when saving is successful
        {
            console.log(error)
            return res.send('We are sorry. We were unable to save your meal. Please try again.')
        }else{
            res.redirect('/meals')
        }
        
     })
    //req.body has the answers that the user entered; the values from the form I created
    console.log(req.body)                         
    //req.send() is what sends the response to the browser and its RESPONSE if the data that the user submitted via the form; my name attrobutes in addmeals.ejs are my property names in the req.body
     //res.send(req.body)
})
//**what is this route supposed to be doing? listen for GET /meals, i have the Meal model so use that, it needs to be able to get all of the meals entered (.find()), render viewmeals.ejs and pass the created meals into it 
//When the browser visits this route, it should be getting all of the meals and displaying them for the user to be able to see on the page 
// */

app.get('/meals', isLoggedIn, (req, res) => {

    //this needs to find all of the Meal documents. get error or successful callback; meals are the documents in the model; you could use any name for meals aka 'results'
    Meal.find((error, meals) => {
        if(error) {
            console.log(error)
            return res.send('We are sorry, there was a problem finding your meals. Please retry.')
        }
        res.render('viewmeals.ejs', {
            //name inside the .ejs file: value I am getting from the route
            meals: meals //meals comes from the what is being returned by Meal.find()
        })
    })
})

//route to find specific meals
app.get('/meals/:id/edit',isLoggedIn, (req, res) => {
    
    Meal.findById(req.params.id, (error, meal) => {
         if(error){
            console.log(error)
        return res.send("We're sorry. We were unable to find the requested meal.")
    }if (!meal) {//if there is no id that matches that specific id 
        //console.log(error)
        return res.send("We're sorry, we could not find a meal with this id.")
    }

   
    res.render('editmeals.ejs', {
        meal: meal //ex. meal.mealType in the ejs
    })
    })
   
}) 

//this is rendering the page and can get data potentially
app.get('/meals/edit', (req, res) => {
    //this is where the user will be redirected wh

    //redirect 
})

//this is what you would use to update the edit
app.put('/meals/:id', isLoggedIn, (req,res) => {
    Meal.findByIdAndUpdate(
        req.params.id, 
        {
                mealType: req.body.mealType,
            mealDate: req.body.mealDate,
            mealPoem: req.body.mealPoem,
            mealAcquired: req.body.mealAcquired,
            mealIngredients: req.body.mealIngredients,
            mealRating: req.body.mealRating,
        }, 
        function(error, updatedMeal){
            if (error) {
                console.log(error)
                return res.send('We are sorry. There was a problem updating your food. Please retry.')
            }
            //if no meal matches the meal id that the user is looking for...
            if (!updatedMeal){
                return res.send('We are sorry, your meal could not be found.')
            }
            res.redirect('/meals')
        }
    )
})

//Deletion starts here 
    app.delete('/meals/:id', isLoggedIn, (req, res) => {
            //find the document with that particular id and delete it 
        Meal.findByIdAndDelete(req.params.id, (error, deletedMeal) => {
            if (error) {
                console.log(error)
                return res.send('We are sorry, there was a problem deleting your meal. Please try again.')
            }
            //this is the document that was deleted
            if (!deletedMeal) {
                return res.send('That meal could not be found.')
            }
            res.redirect('/meals')
        })
    })
//Deletion ends here

//profile route
    app.get('/profile', isLoggedIn, (req, res) => {
        res.render('profile.ejs', {
            user: req.user
        })
    })

    //logout route
    app.get('/logout', function(req, res){
        req.logout()
        res.redirect('/')
    })

    //logout route
    app.get('/logout', function(req,res) {
        //passport gets asked to remove the authenticated user from the session
        req.logout()
        //send the user back to the home page
        res.redirect('/')
    })

// AUTHENTICATE (FIRST LOGIN) ==================================================
// =============================================================================

    


    // locally --------------------------------
        // LOGIN ===============================
        // show the login form
        app.get('/login', function(req, res) {
            res.render('login.ejs', { message: req.flash('loginMessage') });
        });

        // process the login form
        app.post('/login', passport.authenticate('local-login', {
            successRedirect : '/profile', // redirect to the secure profile section
            failureRedirect : '/login', // redirect back to the signup page if there is an error
            failureFlash : true // allow flash messages
        }));

        // SIGNUP =================================
        // show the signup form
        app.get('/signup', function(req, res) {
            res.render('signup.ejs', { message: req.flash('signupMessage') });
        });

        // process the signup form
        app.post('/signup', passport.authenticate('local-signup', {
            successRedirect : '/profile', // redirect to the secure profile section
            failureRedirect : '/signup', // redirect back to the signup page if there is an error
            failureFlash : true // allow flash messages
        }));

        // route middleware to ensure user is logged in
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();

    res.redirect('/');
}

}

