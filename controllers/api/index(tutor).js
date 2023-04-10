const router = require('express').Router();

//const express = require('express');
//const app = express();


// All of these routes need to be prefixed with '/api'
router.get('/', (req, res) => {
  
});

router.get('/users', (req, res) => {
    // What information is needed?
        // we might make a query to the Database for some kinda info

    // Saw we have temp data
    let allUsers = [
        { id: 5, username: "Bob" }, 
        { id: 2, username: "Sarah"}
    ];


    // here we are sending both a VIEW and DATA to the browser
    res.render("users", { users: allUsers });
});

router.post('/users', (req, res) => {
    console.log("Req Body: ", req.body);
})


module.exports = router;

//////////////


const router = require('express').Router();
const apiRoutes = require('./api/index(tutor)');
//const express = require('express');
//const app = express();

router.use('/api', apiRoutes); 

router.get('/', (req, res) => {
    res.render('homepage');
});

router.get('/about', (req, res) => {
    res.render('about');
});


module.exports = router;