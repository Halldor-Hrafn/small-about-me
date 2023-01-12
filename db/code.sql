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

INSERT INTO users (
  id,
  username,
  display_name,
  email,
  password,
  admin,
  created_date
)
VALUES (
  1,
  'admin',
  'admin',
  'throwaway.admin.account@gmail.com',
  '$argon2id$v=19$m=65536,t=3,p=4$SjNl4iL55g2QnXY9xmu7vw$VmKJTqbWoyyYXZwxuXStehrGCd4OuPGtgyirWhbVqw8',
  1,
  '1970-01-01T00:00:00.000Z'
);
COMMIT;
