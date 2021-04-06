const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.user = require("./user.model");
db.role = require("./role.model");
db.url = dbConfig.url;
db.tutorials = require("./tutorial.model.js")(mongoose);

db.ROLES = ["user", "admin", "moderator"];

module.exports = db;
