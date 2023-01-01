const express = require('express');
const session = require('express-session');
const path = require('path');
require('dotenv/config');

// public pages
const frontPage = require('./routes');

// initialize express
const app = express();

// allow req.body and (presumably) req.query to function
app.use(express.urlencoded({ extended: false }));

// tell express where the public directories are
app.use(express.static(path.join(__dirname, 'public')));

// tell express where the template files are
app.set('views', path.join(__dirname, 'views'));
// set the view engine
app.set('view engine', 'ejs');

// allow sessions to work
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitialized: true,
}));

// public pages
app.use('/', frontPage);

// display what the 404 error would do
app.use((req, res) => {
  res.status(404);
  res.render('error', { title: 'Error', status: 404, msg: 'Site not found!' });
});

// display what any other error would do
app.use((err, req, res) => {
  res.status(err.status || 500);
  res.render('error', { title: 'Error', status: res.status || 500, msg: 'Whoops, someone is dumb and did something wrong' });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Server is running on port 3000');
});