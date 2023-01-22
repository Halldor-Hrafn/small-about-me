const express = require('express');
const path = require('path');
const argon2 = require('argon2');

const dbFile = path.join(__dirname, '../db/main.db');

const findUser = require('../db/read/user');

const router = express.Router();

router.get('/', (req, res) => {
  const title = 'Login page';

  let isLoggedIn = false;
  let admin = false;
  let username = '';

  if (req.session.isLoggedIn) {
    isLoggedIn = true;
    username = req.session.username;
    if (!req.session.admin) {
      admin = false;
    } else {
      admin = true;
    }
  }

  if (process.env.DEV) admin = true;

  res.render('login', { title, isLoggedIn, username, admin });
});

router.post('/', async (req, res) => {
  const user = findUser(dbFile, req.body.email);
  let verified = false;

  if (user) {
    verified = await argon2.verify(user.password, req.body.password);
  }

  if (verified) {
    req.session.isLoggedIn = true;
    req.session.username = user.username;
    req.session.display_name = user.display_name;
    req.session.userId = user.id;
    if (user.admin) {
      req.session.admin = true;
    }
    res.redirect('/');
  } else {
    res.send('Incorrect username and/or password');
  }
})

module.exports = router;
