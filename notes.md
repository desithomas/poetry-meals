<!-- Verbalizing the routes so we know what pages you are building-->
     <!--
    Page 1: Home page '/'Landing page route : app.get('/')
        * greeting 
        * explanation of the site 
        * Link to the actual profile login 
        
    Page 2: Enter your meals; Add a meal page  app.post('/meals/new')
        *form 
            *takes the different listed fields 
            * Submit button 
            *posts to server and database??? info should go to page 3 and 
    Page 3: Edit Page app.put('/meals/edit')
        * where the user goes back and makes edits 
            * in order for the page to work it needs an entry form the database and pull it from the content and then edit it from there and then save the information via a save button 
                *this should then update the past meals page 
    
    Page 4: View all  meals page app.get('/meals')
        *pull their already entered information so they can view them 

    
    Page 5: Made a mistake? Here is your delete page where you can delete the meal entirely app.delete('/meals/deletemeal')

    MongoDB: start with this when you start working with your server; build out your models 
        refer to the savage-auth model 
    
    -->
        <!--Navigation and Header for main page -->


        notes: anytime it is in views, it should be app.get

        app
            routes 
                addmeals -> 
        views 