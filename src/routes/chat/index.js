const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  const title = 'Chat page';

  let isLoggedIn = false;
  let username = '';

  if (req.session.isLoggedIn) {
    isLoggedIn = true;
    username = req.session.username;
  }

  res.render('chat/index', { title, isLoggedIn, username });
});

module.exports = router;
