// sugerencia de cuanta agua deberías haber consumido.

const lang = require('../sources/config');
const source = require(lang.es);

const { awitaQuotes } = source;

const awita = (req, res) => {
    const randonIndex = Math.floor(Math.random() * (awitaQuotes.length));
    res.send({
        response_type: "ephemeral", //ephemeral to return the message to the requested user
        text: awitaQuotes[randonIndex]
    });
  };
  
  module.exports = awita;