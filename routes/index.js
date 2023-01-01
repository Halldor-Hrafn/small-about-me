// the front page, what else do you want?
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const title = 'Front page';
  const msg = 'Front page';
  res.render('index', { title, msg });
});

module.exports = router;
