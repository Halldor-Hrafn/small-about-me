// this route is to create accounts with admin privelages
const express = require('express');
const argon2 = require('argon2');
const path = require('path');
require('dotenv/config');

const dbFile = path.join(path.join(__dirname, '../../db/main.db'));

const router = express.Router();

router.get('/', (req, res) => {
  if (req.session.admin || process.env.DEV) {
    const title = 'Create a admin user';

  }
})
