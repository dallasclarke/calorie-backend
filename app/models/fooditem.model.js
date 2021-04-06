const FoodItem = (mongoose) =>
  mongoose.model(
    "FoodItem",
    new mongoose.Schema({
      name: String,
      calories: Number,
    })
  );

module.exports = FoodItem;
