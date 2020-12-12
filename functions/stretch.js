// it reminds you to streacordate de hacer elongaciones, aprovechá a 
const quotes = 
[   
    { 
        name: "Elongación para manos" , 
        description: 'Para prevenir la contracción de los músculos y tensión en las articulaciones tras horas de escribir, un ejercicio práctico es extender los dedos de las manos y mantener la posesión durante diez segundos. Repetir al menos tres veces.' ,
        extra: ""
    },
    {
        name: "Estiramiento de cuello y hombro",
        description: "Al estar sentado en la misma posición durante un buen trecho de la mañana, el cuello y los hombros son los primeros en resentirlo. Levantar los brazos y llevarlos hacia la nuca de manera que queden alineados a las orejas, estirará los músculos agarrotados. La posición debe mantenerse de tres a cinco segundos, siendo repetida un máximo de cinco veces.",
        extra: ""
    },
    {
        name: "Estiramiento de espalda y hombros",
        description: "Cada mañana al comenzar un nuevo día, la espalda está estirada tras horas de descanso, pero al momento de pisar suelo laboral empieza a encorvarse. Para evitar el agarrotamiento, una excelente alternativa es entrelazar las manos detrás de la cabeza con los codos a los lados y empujar los hombros hacia atrás. Mantener la posición durante ocho a diez segundos beneficiará la elongación.",
        extra: ""
    },
    {
        name: "Elongación para cuello",
        description: "Mantener la misma posición del cuello y espalda en la silla, ocasiona tensión, la mejor forma de liberarla es girar el cuello a un lado, siempre por encima del hombro, como si se quisiera voltear a ver detrás. Hacerlo dos o tres veces con una duración de diez segundos favorecerá la relajación en la zona muscular.",
        extra: ""
    },
    {
        name: "STOP",
        description: "Es tiempo de elongar por un minuto, realiza la siguiente rutina",
        extra: "https://www.youtube.com/watch?v=XY8nDWNefq4"
    },
    {
        name: "¿Cómo es tu higiene postural?",
        description: "Es tiempo de revisar como sentarse bien en el trabajo.",
        extra: "https://www.youtube.com/watch?v=x5BI-dPT8GI&ab_channel=FisioOnline"
    }

];

const stretch = (req, res) => {
    const randonIndex = Math.floor(Math.random() * (quotes.length));
    res.send({
      response_type: "ephemeral", //ephemeral para responder a usuario 
      blocks: [
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: quotes[randomIndex].name
          }
        },
        {
          type: "section",
          block_id: "section567",
          text: {
            type: "mrkdwn",
            text: quotes[randomIndex].description
          },
        },
        {
          type: "section",
          block_id: "section5",
          text: {
            type: "text",
            text: quotes[randomIndex].extra
          },
        }
      ]
    });
  };

  module.exports = stretch;