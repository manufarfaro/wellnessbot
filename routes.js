const express = require('express');

const randomQuote = require('./functions/randomQuote');
const awita = require('./functions/awita');
const rest = require('./functions/rest');
const frutita = require('./functions/fruittip');
const stret = require('./functions/stretch');

const router = express.Router();

// add your routes here
// p.e
// router.post("/lunch", lunch);
router.post('/randomQuote', randomQuote);

router.post('/awita', awita);
router.post('/water', awita);

router.post('/rest', rest);

router.post('/frutita', frutita);
router.post('/fruittip', frutita);
router.post('/healthyfood', frutita);
router.post('/alimentation', frutita);
router.post('/fruit', frutita);

router.post('/stretch', stret);
router.post('/elongar', stret);
router.post('/estirar', stret);

module.exports = router;