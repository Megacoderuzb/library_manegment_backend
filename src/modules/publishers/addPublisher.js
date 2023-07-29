const Publisher = require("./Publisher");

const addPublisher = async (data) => {
  const result = await Publisher.create({ ...data });

  return result;
};

module.exports = addPublisher;
