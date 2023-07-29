const { compare } = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { UnauthorizedError } = require("../../shared/errors");
const config = require("../../shared/config");
const Admin = require("./Admin");

const loginAdmin = async ({ username, password }) => {
  const existing = await Admin.findOne({ username });

  if (!existing) {
    throw new UnauthorizedError("Incorrect Adminname or password.");
  }

  const match = await compare(password, existing.password);

  if (!match) {
    throw new UnauthorizedError("Incorrect Adminname or password.");
  }

  const token = jwt.sign(
    {
      user: {
        id: existing._id,
        role: existing.is_super ? "super_admin" : "admin",
      },
    },
    config.jwt.secret,
    {
      expiresIn: "1d",
    }
  );

  return token;
};

module.exports = loginAdmin;
