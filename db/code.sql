BEGIN TRANSACTION;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS comments;

CREATE TABLE users (
  id INTEGER PRIMARY KEY,
  username TEXT UNIQUE NOT NULL,
  display_name TEXT,
  email TEXT UNIQUE,
  password TEXT,
  admin INTEGER DEFAULT 0,
  created_date TEXT
);

CREATE TABLE posts (
  id INTEGER PRIMARY KEY,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  user_id INTEGER,
  created_date TEXT
);

CREATE TABLE comments (
  id INTEGER PRIMARY KEY,
  content TEXT NOT NULL,
  user_id INTEGER,
  post_id INTEGER,
  created_date TEXT
);
COMMIT;
