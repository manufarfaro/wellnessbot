// randomQuote - random pero healthy xD 

const lang = require('../source/config');
const source = require(lang.path);

const { randomQuotes } = source;

const randomQuote = (req, res) => {
    const randonIndex = Math.floor(Math.random() * (randomQuotes.length));
    res.send({
      response_type: "ephemeral", //ephemeral para responder a usuario 
      text: randomQuotes[randonIndex]
    });
  };
  
  module.exports = randomQuote;

//   ({
//     "response_type": "in_channel",
//     "text": "*VE VO*",
//     "attachments": [{
//         "image_url": "https://k31.kn3.net/taringa/D/6/5/0/3/6/G-DragonKing/C36.jpg"
//     }]
// })