// randomQuote - random pero healthy xD 

const quotes = 
[
    'Know thy self, know thy enemy. A thousand battles, a thousand victories. - Sun Tzu',
    'He will win who knows when to fight and when not to fight. - Sun Tzu',
    'Remember to eat fruit ... an apple a day keeps anyone away if you throw it hard enough.'
];

const randomQuote = (req, res) => {
    const randonIndex = Math.floor(Math.random() * (quotes.length));
    res.send({
      response_type: "ephemeral", //ephemeral para responder a usuario 
      text: quotes[randonIndex]
    });
  };
  
  module.exports = randomQuote;