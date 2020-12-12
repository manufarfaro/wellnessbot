// recomentadar una fruta, propiedades y por qué sería bueno comer frutas. 

const lang = require('../sources/config');
const source = require(lang.es);

const { frutitaQuotes } = source;
const { globals } = source;

const fruitTip = (req, res) => {
    const randonIndex = Math.floor(Math.random() * (frutitaQuotes.length));
    res.send({
      response_type: "ephemeral", //ephemeral para responder a usuario 
      text: globals.haveyouconsidered + ' ' + frutitaQuotes[randonIndex].name + ', ' + globals.takingaccountthat + ' ' + frutitaQuotes[randonIndex].magic,
      attachments: [{
        image_url: frutitaQuotes[randonIndex].img
      }]
    });
  };
  
  module.exports = fruitTip;