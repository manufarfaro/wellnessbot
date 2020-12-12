// rest - cada una hora mandar a caminar, desp de 5 min a trabajar esclavo

const lang = require('../sources/config');
const source = require(lang.es);

const { restQuotes } = source;
const { restOverQuotes } = source;

const timeToComeBack = 10000;

const rest = (req, res) => {
    let randonIndex = Math.floor(Math.random() * (restQuotes.length));
    res.send({
      response_type: "ephemeral",  
      text: restQuotes[randonIndex]
    });
    /* setTimeout(() => {
        randonIndex = Math.floor(Math.random() * (restOverQuotes.length));
        res.send({
            response_type: "ephemeral", 
            text: restOverQuotes[randonIndex]
          });
    }, timeToComeBack); */
  };
  
  module.exports = rest;