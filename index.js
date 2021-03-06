const express = require('express');
const routes = require('./routes');
const path = require('path');
const bodyParser = require('body-parser')
require('dotenv').config();

const app = express();

app.use('/static', express.static(path.join(__dirname, 'public')))

app.use(bodyParser.json())
app.use('/', routes);

app.listen(process.env.PORT || '3000');