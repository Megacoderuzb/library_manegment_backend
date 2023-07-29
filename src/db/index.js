const mongoose = require("mongoose");

module.exports = async function () {
  return mongoose
    .connect("mongodb://127.0.0.1:27017/exem_9", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("DB ga ulandi.");
    })
    .catch((err) => {
      console.log("DB da xatolik: ", err);
    });
};
