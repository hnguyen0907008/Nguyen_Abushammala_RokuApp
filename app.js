const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express();

const port = process.env.PORT || 4000;

hbs.registerPartials(path.join(__dirname, '/views/templates'));
hbs.partials = hbs.templates;

app.use((req, res, next) => {  
    next(); // => send the user to the route they requested
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', require('./routes/index'));

app.listen(port, () => {
    console.log(`app is running on ${port}`);
})