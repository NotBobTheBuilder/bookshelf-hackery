var Bookshelf = require('bookshelf'),
    express   = require('express'),
    app       = express();

app.use(express.bodyParser());

var db = Bookshelf.initialize({
  client: "sqlite3",
  connection: {
    filename: "./hackery.sqlite"
  }
});

var User = db.Model.extend({
  tableName: 'users'
});

var Users = db.Collection.extend({
  model: User
});

app.get('/users', function(req, res) {
  new Users().fetch().then(function(users){
    res.json(users.toJSON());
  });
});

app.get('/users/:id', function(req, res) {
  new User({id: req.params.id}).fetch().then(function(user) {
    res.json(user.toJSON());
  });
});

app.post('/users', function(req, res) {
  new User({name: req.body.name}).save();
  res.send(200, "");
});

app.listen(3456);
