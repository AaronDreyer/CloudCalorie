const express = require('express');
const exphbs = require('express-handlebars');
const landingRoutes = require('./controllers');

const app = express();
const PORT = 3001;

// Handlebars config middleawre
const hbs = exphbs.create();
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


app.use('/', landingRoutes);


app.listen(PORT, () => {
    console.log("Server Running");
})