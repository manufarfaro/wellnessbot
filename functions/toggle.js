// cambio de idiomas

const randomQuote = (req, res) => {
    if(global.locale == 'en') {
        global.locale = 'es';
        res.send({
            response_type: "ephemeral", //ephemeral to return the message to the requested user
            text: 'seteado a español.'
        });
    }
    else {
        global.locale = 'en';
        res.send({
            response_type: "ephemeral", //ephemeral to return the message to the requested user
            text: 'lang set as english.'
    });
    }
  };
  
  module.exports = randomQuote;
