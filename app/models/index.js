const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

mongoose.set("toJSON", { virtuals: true });

const db = {};
db.mongoose = mongoose;
db.users = require("./user.model")(mongoose);
db.roles = require("./role.model")(mongoose);
db.meals = require("./meal.model")(mongoose);
db.foodItems = require("./fooditem.model")(mongoose);
db.url = dbConfig.url;
db.tutorials = require("./tutorial.model.js")(mongoose);

db.ROLES = ["user", "admin", "moderator"];

module.exports = db;
