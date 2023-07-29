const express = require("express");
const {
  getPublishers,
  getPublisher,
  postPublisher,
  patchPublisher,
  deletePublisher,
} = require("./_controllers");

const route = express.Router();

route.get("/publishers", getPublishers);
route.get("/publishers/:id", getPublisher);
route.post("/publishers", postPublisher);
route.patch("/publishers/:id", patchPublisher);
route.delete("/publishers/:id", deletePublisher);

module.exports = route;
