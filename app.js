const express = require('express');
const path = require('path');
const ejsMate = require('ejs-mate');
const ejs = require('ejs');
const ExpressError = require('./utils/ExpressErrors');
const userRoutes = require('./routes/users');
const coalaRoutes = require('./routes/coala')


const app = express();
app.use('/', userRoutes);
app.use('/', coalaRoutes)
app.engine('ejs', ejsMate);
app.engine("html", ejs.renderFile);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render('home.html');
});

/////////////////////////////////////////////////////////error

app.all('*', (req, res, next) => {
    next(new ExpressError('Page not Found', 404));
})

app.use((err, req, res, next) => {
    const {statusCode = 500} = err;
    if(!err.message) err.message = 'Oh no, Error!!'
    res.status(statusCode).render('error', {err});
})

/////////////////////////////////////////////////////3000 connect

app.listen(3000, () => {
    console.log('Serving on port 3000')
})