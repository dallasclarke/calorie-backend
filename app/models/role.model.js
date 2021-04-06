const Role = (mongoose) =>
  mongoose.model(
    "Role",
    new mongoose.Schema({
      name: String,
    })
  );

module.exports = Role;
