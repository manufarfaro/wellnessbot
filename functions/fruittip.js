// recomentadar una fruta, propiedades y por qué sería bueno comer frutas. 

const suggestions = 
[
    { name: 'Manzana', magic: 'es rica en antioxidantes, en vitaminas del grupo B (B1, B2 y B6), vitamina C, fósforo, potasio y calcio. Además facilita la digestión de aquellos alimentos que posean un alto contenido en grasas.'},
    { name: 'Pera', magic: 'es muy fácil de digerir, ya que es un 80% agua. Además tiene una gran riqueza de azucares y por eso es muy dulce y es rica en antioxidantes que retrasan el envejecimiento de las células. Es rica en vitaminas B y C, y en potasio, hierro, calcio y yodo, entre otros.'}
];

const fruitTip = (req, res) => {
    const randonIndex = Math.floor(Math.random() * (suggestions.length));
    res.send({
      response_type: "ephemeral", //ephemeral para responder a usuario 
      text: 'Consideraste comer una ' + suggestions[randonIndex].name + ', aprovechando que ' + suggestions[randonIndex].magic
    });
  };
  

  /*
  
"blocks": [
    {
      "type": "section",
      "text": {
        "type": "mrkdwn",
        "text": "Danny Torrence left the following review for your property:"
      }
    },
    {
      "type": "section",
      "block_id": "section567",
      "text": {
        "type": "mrkdwn",
        "text": "<https://example.com|Overlook Hotel> \n :star: \n Doors had too many axe holes, guest in room 237 was far too rowdy, whole place felt stuck in the 1920s."
      },
      "accessory": {
        "type": "image",
        "image_url": "https://is5-ssl.mzstatic.com/image/thumb/Purple3/v4/d3/72/5c/d3725c8f-c642-5d69-1904-aa36e4297885/source/256x256bb.jpg",
        "alt_text": "Haunted hotel image"
      }
    },
  */
  
  module.exports = fruitTip;