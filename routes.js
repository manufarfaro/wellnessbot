const express = require('express');

const randomQuote = require('./functions/randomQuote');
const awita = require('./functions/awita');
const rest = require('./functions/rest');

const router = express.Router();

// add your routes here
// p.e
// router.post("/lunch", lunch);
router.post('/randomQuote', randomQuote);

router.post('/awita', awita);
router.post('/water', awita);

router.post('/rest', rest);

module.exports = router;