const base_url = 'https://wellness-bot-awitabot.herokuapp.com/static/';

const source = {
    globals : {
        haveyouconsidered : 'Consideraste comer una',
        takingaccountthat : 'teniendo en cuenta que'
    },
    randomQuotes : [
        'No tienes hambre, sólo aburrimiento. Tomá un vaso de agua y aprendé la diferencia.',
        'Mantente tranquilo, y bebe agua.',
        'No olvides mantenerte hidratado durante tu jornada de trabajo.'
    ],
    awitaQuotes : [
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
    ],
    frutitaQuotes : [
        { name: 'Manzana', img: base_url+'apple.png', magic: 'es rica en antioxidantes, en vitaminas del grupo B (B1, B2 y B6), vitamina C, fósforo, potasio y calcio. Además facilita la digestión de aquellos alimentos que posean un alto contenido en grasas.'},
        { name: 'Pera', img: base_url+'pear.png', magic: 'es muy fácil de digerir, ya que es un 80% agua. Además tiene una gran riqueza de azucares y por eso es muy dulce y es rica en antioxidantes que retrasan el envejecimiento de las células. Es rica en vitaminas B y C, y en potasio, hierro, calcio y yodo, entre otros.'},
        { name: 'Kiwi', img: base_url+'kiwi.png', magic: 'es rico en vitamina C, ayuda a amortiguar el envejecimiento, regula el coresterol y azucar en sangre.'},
        { name: 'Manzana verde', img: base_url+'green_apple.png', magic: 'es rica en potasio y fibra, lo que ayuda a generar saciedad. Además ayuda con el control de la presión arterial y colesterol.'},
        { name: 'Banana', img: base_url+'banana.png', magic: 'es rica en potasio, genera saciedad y ayuda a mejorar el estado de ánimo, ya que aporta triptófano que luego se transforma en serotonina. "Y ayuda a prevenir calambres" - Algunas abuelas y Bocha.'},
        { name: 'Naranjas', img: base_url+'orange.png', magic: 'son naranjas. No es necesario decir más.'}
    ],
    restQuotes : [
        'Sabés cuando sería un buen momento para levantarte de la silla ? Ahora.',
        'Sería un buen momento para estirar las piernas.',
        'Si todavía no te acalambraste de estar sentado, estás a tiempo de pararte un ratito.'
    ],
    restOverQuotes : [
        'Ya sería hora de volver a ejercitar el teclado.',
        'Hora de volver a ejercitar el cerebro.'
    ],
    stretchQuotes : [   
        // { 
        //     name: 'Elongación para manos' , 
        //     description: 'Para prevenir la contracción de los músculos y tensión en las articulaciones tras horas de escribir, un ejercicio práctico es extender los dedos de las manos y mantener la posesión durante diez segundos. Repetir al menos tres veces.' ,
        //     extra: 'https://www.youtube.com/watch?v=XY8nDWNefq4',
        //     img: base_url+'stretch_exercices.jpg'
        // },
        {
            name: 'Estiramiento de cuello y hombro',
            description: 'Al estar sentado en la misma posición durante un buen trecho de la mañana, el cuello y los hombros son los primeros en resentirlo. Levantar los brazos y llevarlos hacia la nuca de manera que queden alineados a las orejas, estirará los músculos agarrotados. La posición debe mantenerse de tres a cinco segundos, siendo repetida un máximo de cinco veces.',
            extra: 'https://www.youtube.com/watch?v=XY8nDWNefq4',
            img: base_url+'stretch_exercices_2.jpg'
        },
        // {
        //     name: 'Estiramiento de espalda y hombros',
        //     description: 'Cada mañana al comenzar un nuevo día, la espalda está estirada tras horas de descanso, pero al momento de pisar suelo laboral empieza a encorvarse. Para evitar el agarrotamiento, una excelente alternativa es entrelazar las manos detrás de la cabeza con los codos a los lados y empujar los hombros hacia atrás. Mantener la posición durante ocho a diez segundos beneficiará la elongación.',
        //     extra: 'https://www.youtube.com/watch?v=XY8nDWNefq4',
        //     img: base_url+'stretch_exercices.jpg'
        // },
        {
            name: 'Elongación para cuello',
            description: 'Mantener la misma posición del cuello y espalda en la silla, ocasiona tensión, la mejor forma de liberarla es girar el cuello a un lado, siempre por encima del hombro, como si se quisiera voltear a ver detrás. Hacerlo dos o tres veces con una duración de diez segundos favorecerá la relajación en la zona muscular.',
            extra: 'https://www.youtube.com/watch?v=XY8nDWNefq4',
            img: base_url+'stretch_exercices_2.jpg'
        },
        {
            name: 'STOP',
            description: 'Es tiempo de elongar por un minuto, realiza la siguiente rutina',
            extra: 'https://www.youtube.com/watch?v=XY8nDWNefq4',
            img: base_url+'stretch_clock.jpg'
        },
        {
            name: '¿Cómo es tu higiene postural?',
            description: 'Es tiempo de revisar como sentarse bien en el trabajo.',
            extra: 'https://www.youtube.com/watch?v=x5BI-dPT8GI&ab_channel=FisioOnline',
            img: base_url+'stretch_busy.jpg'
        }
    ]
};

module.exports = source;