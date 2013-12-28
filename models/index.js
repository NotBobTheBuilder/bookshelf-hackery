var User,
    Users,
    Talk,
    Talks,
    db      = require('./db');

User = db.Model.extend({
  tableName: 'users',

  talks: function() {
    return this.belongsToMany(Talk);
  }
});

Users = db.Collection.extend({
  model: User,
});

Talk = db.Model.extend({
  tableName: 'talks',

  users: function() {
    return this.belongsToMany(User);
  },
});

Talks = db.Collection.extend({
  model: Talk
});

module.exports = {
  User: {
    User: User,
    Users: Users
  },
  Talk: {
    Talk: Talk,
    Talks: Talks
  }
}
