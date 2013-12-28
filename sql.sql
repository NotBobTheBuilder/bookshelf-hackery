DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS talks;
DROP TABLE IF EXISTS talks_users;

CREATE TABLE users (
  id            INTEGER PRIMARY KEY,
  name,
  talks
);

CREATE TABLE talks (
  id            INTEGER PRIMARY KEY,
  title,
  description,
  users
);

CREATE TABLE talks_users (
  talk_id,
  user_id
);
