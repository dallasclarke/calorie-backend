const db = require("../models/index.js");

const findAll = (request, response) => {
  db.foodItems
    .find()
    .then((data) => {
      console.log(data);
      return response.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  findAll,
};
