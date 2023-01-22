const express = require('express');
require('dotenv/config');

const router = express.Router();

router.get('/', (req, res) => {
  if (req.session.admin || process.env.DEV) {
    const title = 'Admin page';

    let user = isLoggedIn(req.session);

  if (!user) {
    user.isLoggedIn = false;
  }

    res.render('admin', { title, isLoggedIn, username, admin})
  } else {
    res.redirect('/');
  }
});

module.exports = router;
