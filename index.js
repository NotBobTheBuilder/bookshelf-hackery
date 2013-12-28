/*
 * Ensure you run `sqlite3 -init sql.sql hackery.sqlite`
 * before running this example :)
 */
var express   = require('express'),
    app       = express(),
    models    = require('./models');

app.get('/talks', function(req, res) {
  new models.Talk.Talks()
    .fetch({ withRelated: ['users'] })
    .then(function(talks) {
      res.json(talks.toJSON());
  });
});

app.get('/users', function(req, res) {
  new models.User.Users()
    .fetch({ withRelated: ['talks'] })
    .then(function(users) {
      res.json(users.toJSON());
  });
});

/* hacky way to create new users.
 * next example will be cleaner
 */
app.get('/new', function(req, res) {
  models.User.User.forge({"name": "Neo"})
    .save()
    .then(function(user) {
      return user
        .related('talks')
        .create({"title": "a great talk"})
        .yield(user);
    }).then(function(user) {
      res.send(200);
    });
});

app.listen(3456);
