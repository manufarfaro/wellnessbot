// sugerencia de cuanta agua deberías haber consumido.
const quotes = 
[
    'Recuerda beber al menos 8 vasos de 250 ml de agua por día.',
    '¿Sabías que...? Beber agua alivia la fatiga.',
    '¿Sabías que...? Beber agua evita el dolor de cabeza y las migrañas.',
    '¿Sabías que...? Beber agua ayuda en la digestión y evita el estreñimiento.',
    '¿Sabías que...? Beber agua ayuda a mantener la belleza de la piel.',
    '¿Sabías que...? Beber agua regula la temperatura del cuerpo.',
    '¿Sabías que...? Beber agua reduce el riesgo de cáncer.',
    '¿Sabías que...? Beber agua mejora el sistema inmunológico.',
    '¿Sabías que...? Beber agua reduce el riesgo de problemas cardiacos.',
    '¿Sabías que...? Beber agua resuelve el mal aliento.',
    '¿Ya bebiste tu primer vaso de agua?',
    'Tu ingesta de líquidos probablemente sea adecuada si, casi nunca sientes sed',
    'Deberías beber un vaso de agua.'
];

const awita = (req, res) => {
    const randonIndex = Math.floor(Math.random() * (quotes.length));
    res.send({
        response_type: "ephemeral", //ephemeral to return the message to the requested user
        text: quotes[randonIndex]
    });
  };
  
  module.exports = awita;