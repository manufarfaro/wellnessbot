// recomentadar una fruta, propiedades y por qué sería bueno comer frutas. 

const suggestions = 
[
    { name: 'Manzana', magic: 'es rica en antioxidantes, en vitaminas del grupo B (B1, B2 y B6), vitamina C, fósforo, potasio y calcio. Además facilita la digestión de aquellos alimentos que posean un alto contenido en grasas.'},
    { name: 'Pera', magic: 'es muy fácil de digerir, ya que es un 80% agua. Además tiene una gran riqueza de azucares y por eso es muy dulce y es rica en antioxidantes que retrasan el envejecimiento de las células. Es rica en vitaminas B y C, y en potasio, hierro, calcio y yodo, entre otros.'}
];

const fruitTip = (req, res) => {
    const randonIndex = Math.floor(Math.random * (0, suggestions.length));
    res.send({
      response_type: "ephemeral", //ephemeral para responder a usuario 
      text: 'Consideraste comer una ' + suggestions[randonIndex].name + ', aprovechando que ' + suggestions[randonIndex].magic
    });
  };
  
  module.exports = fruitTip;