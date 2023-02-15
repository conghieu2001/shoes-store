const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const methodOverride = require('method-override');
const expressHbsSections = require("express-handlebars-sections");
const path = require('path');
const app = express();
const port = 3000;

const route = require('./routes');
const db = require('./config/db');

app.use(express.json());
app.use(express.urlencoded());
app.use(morgan('combined'));

app.engine('hbs', handlebars.engine({ extname: '.hbs', helpers: {sum: (a,b) => a+b, section: expressHbsSections()} }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));
// console.log(path.join(__dirname, 'resources/views'));

app.use(express.static(path.join(__dirname, 'public')));
// console.log(path.join(__dirname));
app.use(methodOverride('_method'));

//Route init
route(app);

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});
