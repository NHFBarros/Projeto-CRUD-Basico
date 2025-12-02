const express = require('express')
const colors = require('colors')
const morgan = require('morgan')
const dotenv = require('dotenv') 
dotenv.config()
const db = require('./db.js')
const estudantesRoutes = require('./routes/estudantesRoutes.js')
const path = require('path');

// rest object
const app = express()
app.use(express.urlencoded({ extended: true }));

// Middleware
app.use(express.json())
app.use(morgan('dev'))
dotenv.config()

// Route prefix
app.use('/', estudantesRoutes);

// Ports
const PORT = process.env.PORT || 3000;
db.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Connected to MySQL');
    }
});

// template view engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`.bgBlue.white.bold);
})