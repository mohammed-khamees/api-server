'use strict';

const Food = require('./../models/data-collection-class.js');
const foodModel = require('./../models/food.js');
const food = new Food(foodModel);

async function createHandler(req, res) {
	const foodObject = req.body;
	try {
		const resObj = await food.create(foodObject);
		res.status(201).json(resObj);
	} catch (error) {
		throw new Error(error.message);
	}
}

async function getAllFoodHandler(req, res) {
	try {
		const resObj = await food.read();
		res.json(resObj);
	} catch (error) {
		next(error);
	}
}

async function getOneFoodHandler(req, res) {
	try {
		const resObj = await food.read(req.params.id);
		res.json(resObj);
	} catch (error) {
		next(error);
	}
}

async function updateFoodHandler(req, res) {
	const foodObject = req.body;
	try {
		const resObj = await food.update(req.params.id, foodObject);
		res.json(resObj);
	} catch (error) {
		next(error);
	}
}

async function deleteFoodHandler(req, res) {
	try {
		const resObj = await food.delete(req.params.id);
		res.json(resObj);
	} catch (error) {
		next(error);
	}
}

module.exports = {
	createHandler,
	getAllFoodHandler,
	getOneFoodHandler,
	updateFoodHandler,
	deleteFoodHandler,
};
