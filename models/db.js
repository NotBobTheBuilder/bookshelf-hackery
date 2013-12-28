var Bookshelf = require('bookshelf'),
    db;

db = Bookshelf.initialize({
  client: "sqlite3",
  debug: true,
  connection: {
    filename: "./hackery.sqlite"
  }
});

module.exports = db;
