// rest - cada una hora mandar a caminar, desp de 5 min a trabajar esclavo

const quotes = 
[
    'Sabés cuando sería un buen momento para levantarte de la silla ? Ahora.',
    'Sería un buen momento para estirar las piernas.',
    'Si todavía no te acalambraste de estar sentado, estás a tiempo de pararte un ratito.'
];

const goBackQuotes = 
[
    'Ya sería hora de volver a ejercitar el teclado.',
    'Hora de volver a ejercitar el cerebro.'
];

const timeToComeBack = 300000;

const rest = (req, res) => {
    const randonIndex = Math.floor(Math.random * (0, quotes.length));
    res.send({
      response_type: "ephemeral",  
      text: quotes[randonIndex]
    });
    setTimeout(() => {
        randonIndex = Math.floor(Math.random * (0, goBackQuotes.length));
        res.send({
            response_type: "ephemeral", 
            text: goBackQuotes[randonIndex]
          });
    }, timeToComeBack);
  };
  
  module.exports = rest;