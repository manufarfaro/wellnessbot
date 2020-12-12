// randomQuote - random pero healthy xD 

const quotes = 
[
    'Know thy self, know thy enemy. A thousand battles, a thousand victories. - Sun Tzu',
    'He will win who knows when to fight and when not to fight. - Sun Tzu'
];

const randomQuote = (req, res) => {
    const randonIndex = Math.Floor(Math.random * (0, quotes.length));
    res.send({
      response_type: "ephemeral", //ephemeral para responder a usuario 
      text: quotes[randonIndex]
    });
  };
  
  module.exports = randomQuote;