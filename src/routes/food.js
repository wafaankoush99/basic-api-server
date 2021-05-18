'use strict';

/* Application Setup */

const express = require('express');

/* Creating a class for food */

const Food = require('../models/food');
const food = new Food();

const router = express.Router();

/* food ROUTES */

router.get('/', getFood);
router.get('/:id', getFoodID);
router.post('/', createFood);
router.put('/:id', updateFood);
router.delete('/:id', deleteFood);

/* REST route handlers  */

function getFood(req, res) {
  const resObj = food.read();
  res.json(resObj);
}

function getFoodID(req, res) {
  const resObj = food.read(req.params.id);
  res.json(resObj);
}

function createFood(req, res) {
  const foodObj = req.body;
  const resObj = food.create(foodObj);
  res.status(201).json(resObj);
}

function updateFood(req, res) {
  const foodObj = req.body;
  const resObj = food.update(req.params.id, foodObj);
  res.json(resObj);
}

function deleteFood(req, res) {
  const resObj = food.delete(req.params.id);
  res.json(resObj);
}

/* Export */

module.exports = router;