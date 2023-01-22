const express = require('express');

const router = express.Router();

const isLoggedIn = require('../../middleware/isLoggedIn');

router.get('/', (req, res) => {
  const title = 'Chat page';

  let user = isLoggedIn(req.session);

  if (!user) {
    user.isLoggedIn = false;
  }

  res.render('chat/index', { title, user });
});

module.exports = router;
