// it reminds you to streacordate de hacer elongaciones, aprovechá a 
const quotes = 
[
    'Know thy self, know thy enemy. A thousand battles, a thousand victories. - Sun Tzu',
    'He will win who knows when to fight and when not to fight. - Sun Tzu'
];

const stretch = (req, res) => {
    const randonIndex = Math.floor(Math.random * (0, quotes.length));
    res.send({
      response_type: "ephemeral", //ephemeral para responder a usuario 
      text: quotes[randonIndex],
      links: [
        {
            "domain": "example.com",
            "url": "https://example.com/12345"
        },
    ]
    });
  };
  
  module.exports = stretch;