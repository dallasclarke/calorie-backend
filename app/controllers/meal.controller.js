const db = require("../models");

const Meal = db.meals;
const FoodItem = db.foodItems;

const create = (request, response) => {
  const { body } = request;

  FoodItem.insertMany(body.foodItems)
    .then((foodItems) => {
      return Meal.create({ name: body.name, foodItems });
    })
    .then((meal) => {
      return meal.populate("foodItems");
    })
    .then((meal) => response.json(meal));
};

const findAll = (request, response) => {
  Meal.find()
    .populate("foodItems")
    .then((data) => {
      response.json(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving meals.",
      });
    });
};

const update = (request, response) => {
  const { id } = request.params;
  const { body } = request;

  FoodItem.insertMany(body.foodItems)
    .then((foodItems) =>
      Meal.findByIdAndUpdate(id, {
        $set: { name: body.name, foodItems },
      })
    )
    .then((meal) => Meal.findById(meal.id).populate("foodItems"))
    .then((meal) => response.json(meal));
};

module.exports = {
  create,
  findAll,
  update,
};
