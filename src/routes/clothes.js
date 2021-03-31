'use strict';

const express = require('express');
const validator = require('./../middleware/validator');
const {
	createHandler,
	getAllClothesHandler,
	getOneClothesHandler,
	updateClothesHandler,
	deleteClothesHandler,
} = require('./../controller/clothes');

const router = express.Router();

router.post('/', createHandler);
router.get('/', getAllClothesHandler);
router.get('/:id', validator, getOneClothesHandler);
router.put('/:id', validator, updateClothesHandler);
router.delete('/:id', validator, deleteClothesHandler);

module.exports = router;
