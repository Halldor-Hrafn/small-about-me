// the front page, what else do you want?
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const title = 'Front page';
  const msg = 'Front page';

  let isLoggedIn = false;
  let username = '';

  if (req.session.isLoggedIn) {
    isLoggedIn = true;
    username = req.session.username;
  }

  const header = [
    'Hello world!',
    'Hello tomorrow!',
    'Hello yesterday!'
  ];

  const paragraph = [
    `So, I was walking downtown yea? when this dude just came out of nowhere and jumped me!
    You won't believe what happened afteer that, Batman just came out ow nowhere and swhoop!
    Dude no more! crazy, right?
    `,
    `After the dude jumped me, I was in completee shock, ye?, and so I thought to myself "man,
    I'm lucky that batman came around, it's probably my lucky day then" and so I decided to pull on the lottery that night.
    `,
    `And so I went to a shop nearby, and lo and behold, I got a jackpot! so now I got like 3 million in my pocket.
    What shall we spend it on? hookers? nah, too basic, I think we should go the sigma male route
    and invest it all in $TSLA or $TWTR, shurely those won't collapse right? right?`
  ]

  res.render('index', { title, msg, header, paragraph, isLoggedIn, username });
});

module.exports = router;
