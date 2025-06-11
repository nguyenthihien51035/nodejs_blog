const path = require('path');
const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const app = express();
const port = 3000;

const route = require('./routes');
const db = require('./config/db')

db.connect()

app.use(express.static(path.join(__dirname, 'public')));

// middleware
app.use(
    express.urlencoded({
        extended: true,
    }),
);

app.use(express.json());

// HTTP logger
// app.use(morgan('combined'))
app.use(morgan('dev'))

// Template engine (handlebars)
app.engine(
    'hbs',
    exphbs.engine({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// cau hinh routes (khoi tao tuyen duong)
// route init
route(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
