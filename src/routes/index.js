// the front page, what else do you want?
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const title = 'Front page';
  const msg = 'Front page';

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

  const header = [
    'New phone who dis?',
    'Ayo D&D?',
    'D&D Hell.'
  ];

  const paragraph = [
    `
    So, I am creating this website because, why not, I want to create some good websites.
    The only problem that I have is that I have absolutely no f****** idea on what to put on the front page.
    Do I put some, like, quotes that famous computer devs have made? Or should I put my own quotes?
    Like, what do people put here? I have one idea: talk about what to put on the front page!
    `,
    `
    But then it dawned on my, I did talk about what to put on the front page, and so, I need more material.
    Another thing I could do is talk about D&D, which, btw, is an extremely fun TTRPG (Table-Top-Role-Playing-Game).
    I am that friend who is the forever DM, but I enjoy it, I can check all the books and know all the detail :)
    I am about to make my friends try out the Eberron setting, which seems really fun, so I am excited.
    `,
    `
    But like, what should I do with the campaign? I am not used to writing long D&D campaigns.
    I just use the officila campaigns that were made by D&D, the one I am currently DM'ing is "Princes of the Apocalypse",
    my group is rather facinating, in the beginning, they found a young child who was trapped under some rocks.
    My party did what any party would do and saved the child (but not before one of the playes (an evil aligned warlock) tried to intimidate the child).
    After learning that what he went through was a "perfectly sensible punishment" for the child the party decided to do one thing: kill the father.
    By the way, killing the father had nothing in it for them, he wasn't even important to the story.
    The only thing we even knew about him was his name. Nothing else
    `
  ]

  res.render('index', { title, msg, header, paragraph, isLoggedIn, username, admin });
});

module.exports = router;
