const express = require('express');
const path = require('path');
const argon2 = require('argon2');

const dbFile = path.join(__dirname, '../db/main.db');

const createUser = require('../db/create/user');

const router = express.Router();

router.get('/', (req, res) => {
  const title = 'Register';

  let user = isLoggedIn(req.session);

  if (!user) {
    user.isLoggedIn = false;
  }

  if (process.env.DEV) admin = true;

  res.render('register', { title, isLoggedIn, username, admin });
});

router.post('/', async (req, res) => {
  const hash = await argon2.hash(req.body.password);
  createUser(dbFile, req.body.username, req.body.email, hash);
  req.session.isLoggedIn = true;
  req.session.username = req.body.username;
  req.session.display_name = req.body.username;
  res.redirect('/');
});

module.exports = router;
