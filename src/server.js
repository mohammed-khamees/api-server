'use strict';

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const notFoundHndler = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
const clothesRouter = require('./routes/clothes');
const foodRouter = require('./routes/food');

const app = express();

//global middlewares
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.use('/api/v1/clothes', clothesRouter);
app.use('/api/v1/food', foodRouter);

app.use('/bad', (res, req) => {
	throw new Error();
});

app.use('*', notFoundHndler);
app.use(errorHandler);

function start(port) {
	app.listen(port, console.log(`Listening on PORT ${port}`));
}

module.exports = {
	app,
	start,
};
