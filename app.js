const express = require('express');

const app = express();

// connect database
const db = require('./connection/connection');
db();

module.exports = app;