const meals = require("../controllers/meal.controller.js");

const router = require("express").Router();

// Create a meal
router.post("/", meals.create);

// Retrieve all Meals
router.get("/", meals.findAll);

router.put("/:id", meals.update);

module.exports = router;
