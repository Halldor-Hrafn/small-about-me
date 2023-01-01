const Database = require('better-sqlite3');

module.exports = function createUser(dbFile, username, email, password) {
  const db = new Database(dbFile);
  const stmt = db.prepare('INSERT INTO useers(username, email, password) VALUES (?, ?, ?)');
  const user = stmt.run(username, email, password);
  const lastId = user.lastInsertRowid;
  db.close();

  return lastId;
}