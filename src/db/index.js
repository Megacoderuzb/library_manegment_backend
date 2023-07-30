const mongoose = require("mongoose");
require("dotenv/config");

// .connect("mongodb://127.0.0.1:27017/exem_9", {
module.exports = async function () {
  return mongoose
    .connect(process.env.MONGO_ATLAS_URL, {
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
