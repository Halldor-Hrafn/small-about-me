const express = require('express');
require('dotenv/config');

const router = express.Router();

router.get('/', (req, res) => {
  if (req.session.admin || process.env.DEV) {
    const title = 'Admin page';
    let admin = true;

    let isLoggedIn = false;
    let username = '';

    if (req.session.isLoggedIn) {
      isLoggedIn = true;
      username = req.session.username;
    }

    res.render('admin', { title, isLoggedIn, username, admin})
  } else {
    res.redirect('/');
  }
});

module.exports = router;
