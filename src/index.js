const express = require("express");
const db = require("./db");
const config = require("./shared/config");
const adminRoute = require("./modules/admins/_api");
const borrowersRoute = require("./modules/borrowers/_api");
const publishersRoute = require("./modules/publishers/_api");
const authorsRoute = require("./modules/authors/_api");
const booksRoute = require("./modules/books/_api");
const loanRoute = require("./modules/loans/_api");

const app = express();

app.use(express.json());

app.use(adminRoute);
app.use(borrowersRoute);
app.use(publishersRoute);
app.use(authorsRoute);
app.use(booksRoute);
app.use(loanRoute);

db();
app.listen(config.port, () => {
  console.log(`Server ${config.port}-portda ishlayapti.`);
});
