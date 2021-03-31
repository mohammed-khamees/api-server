'use strict';

const express = require('express');
const validator = require('./../middleware/validator');
const {
	createHandler,
	getAllFoodHandler,
	getOneFoodHandler,
	updateFoodHandler,
	deleteFoodHandler,
} = require('./../controller/food');

const router = express.Router();

router.post('/', createHandler);
router.get('/', getAllFoodHandler);
router.get('/:id', validator, getOneFoodHandler);
router.put('/:id', validator, updateFoodHandler);
router.delete('/:id', validator, deleteFoodHandler);

module.exports = router;
