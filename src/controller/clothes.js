'use strict';

const Clothes = require('./../models/data-collection-class.js');
const clothesModel = require('./../models/clothes.js');
const clothes = new Clothes(clothesModel);

async function createHandler(req, res) {
	const clothesObject = req.body;
	try {
		const resObj = await clothes.create(clothesObject);
		res.status(201).json(resObj);
	} catch (error) {
		throw new Error(error.message);
	}
}

async function getAllClothesHandler(req, res) {
	try {
		const resObj = await clothes.read();
		res.json(resObj);
	} catch (error) {
		next(error);
	}
}

async function getOneClothesHandler(req, res) {
	try {
		const resObj = await clothes.read(req.params.id);
		res.json(resObj);
	} catch (error) {
		next(error);
	}
}

async function updateClothesHandler(req, res) {
	const clothesObject = req.body;
	try {
		const resObj = await clothes.update(req.params.id, clothesObject);
		res.json(resObj);
	} catch (error) {
		next(error);
	}
}

async function deleteClothesHandler(req, res) {
	try {
		const resObj = await clothes.delete(req.params.id);
		res.json(resObj);
	} catch (error) {
		next(error);
	}
}

module.exports = {
	createHandler,
	getAllClothesHandler,
	getOneClothesHandler,
	updateClothesHandler,
	deleteClothesHandler,
};
