const Meal = (mongoose) => {
  const schema = new mongoose.Schema({
    name: String,
    foodItems: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "FoodItem",
      },
    ],
  });

  return mongoose.model("Meal", schema);
};

module.exports = Meal;
