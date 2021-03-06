const express = require('express');
const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);
const app = express();
const port = 3000;

app.use(express.json());
app.get('/', (req, res) => res.send('NHL Tracker'));

app.listen(port, () => console.log(`NHL Tracker listening on port ${port}!`));