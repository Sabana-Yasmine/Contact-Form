const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/contact-form", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((data) => {
    console.log("database connected");
  })
  .catch((error) => {
    console.log(error.message);
  });

module.exports = mongoose;

