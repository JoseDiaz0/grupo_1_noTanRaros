const createError = require('http-errors');
const cookieParser = require('cookie-parser');
const express = require('express');
const logger = require('morgan');
const path = require('path');
const methodOverride = require('method-override');


/* Express() */
const app = express();
const PORT = 8080;

/* Middlewares */
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.urlencoded({ extended: false }));
app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(methodOverride('_method'));


/* View Engine Setup */
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

/* Enrutadores */
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const productsRouter = require('./routes/products');
const adminRouter = require('./routes/admin');
const seriesRouter = require('./routes/series');
const logMiddleware = require('./middlewares/logMiddleware');

/* Middlewares de rutas */
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);
app.use('/admin', adminRouter);
app.use('/series', seriesRouter);
app.use(logMiddleware);


app.listen(PORT, () => {
    console.log(`Listening to Port: ${PORT}`);
    console.log(`http://localhost:${PORT}`);
});

module.exports = app;