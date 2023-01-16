const Database = require('better-sqlite3');

module.exports = function createUser(dbFile, username, email, password) {
  const db = new Database(dbFile);
  let date = new Date();
  date = `${date}`;
  const stmt = db.prepare('INSERT INTO users(username, email, password, created_date) VALUES (?, ?, ?, ?)');
  const user = stmt.run(username, email, password, date);
  const lastId = user.lastInsertRowid;
  db.close();

  return lastId;
}