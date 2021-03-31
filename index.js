'use strict';

require('dotenv').config();

const { start } = require('./src/server.js');
const mongoose = require('mongoose');

mongoose
	.connect(process.env.MONGODB_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		start(process.env.PORT);
	})
	.catch((e) => {
		console.log('__CONNECTION ERROR__', e.message);
	});
