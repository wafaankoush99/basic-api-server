'use strict';

/* Application Setup */

const express = require('express');

/* Creating a class for clothes */

const Clothes = require('../models/clothes');
const clothes = new Clothes();

const router = express.Router();

/* clothes ROUTES */

router.get('/', getClothes);
router.get('/:id', getClothesID);
router.post('/', createClothes);
router.put('/:id', updateClothes);
router.delete('/:id', deleteClothes);

/* REST route handlers  */

function getClothes(req, res) {
  const resObj = clothes.read();
  res.json(resObj);
}

function getClothesID(req, res) {
  const resObj = clothes.read(req.params.id);
  res.json(resObj);
}

function createClothes(req, res) {
  const clothesObj = req.body;
  const resObj = clothes.create(clothesObj);
  res.status(201).json(resObj);
}

function updateClothes(req, res) {
  const clothesObj = req.body;
  const resObj = clothes.update(req.params.id, clothesObj);
  res.json(resObj);
}

function deleteClothes(req, res) {
  const resObj = clothes.delete(req.params.id);
  res.json(resObj);
}

/* Export */

module.exports = router;