const router = require("express").Router();

const foodItemController = require("../controllers/foodItem.controllers");

router.get("/", foodItemController.findAll);

module.exports = router;
