const base_url = 'https://wellness-bot-awitabot.herokuapp.com/static/';

const source = {
    globals : {
        haveyouconsidered : 'Have you considered',
        takingaccountthat : 'taking into account that'
    },
    randomQuotes : [
        'You are not hungry, just boredom. Have a glass of water and learn the difference. ',
        'Keep calm, and drink water.',
        'Don’t forget to stay hydrated during your work day.'
    ],
    awitaQuotes: [
        'Remember to drink at least 8 glasses of 250 ml of water per day.',
        'Did you know...? Drinking water relieves fatigue. ',
        'Did you know...? Drinking water prevents headaches and migraines. ',
        'Did you know...? Drinking water aids digestion and prevents constipation. ',
        'Did you know...? Drinking water helps maintain the beauty of the skin. ',
        'Did you know...? Drinking water regulates body temperature. ',
        'Did you know...? Drinking water reduces the risk of cancer. ',
        'Did you know...? Drinking water improves the immune system. ',
        'Did you know...? Drinking water reduces the risk of heart problems. ',
        'Did you know...? Drinking water solves bad breath. ',
        'Have you already had your first glass of water?',
        'Your fluid intake is probably adequate if, you hardly ever feel thirsty',
        'You should drink a glass of water.'
    ],
    frutitaQuotes: [
        {name: 'Apple', img: base_url+'apple.png', magic: 'is rich in antioxidants, in vitamins of group B (B1, B2 and B6), vitamin C, phosphorus, potassium and calcium. It also facilitates the digestion of those foods that have a high fat content. '},
        {name: 'Pear', img: base_url+'pea.png', magic: 'is very easy to digest, as it is 80% water. It also has a great wealth of sugars and that is why it is very sweet and is rich in antioxidants that delay the aging of cells. It is rich in vitamins B and C, and in potassium, iron, calcium and iodine, among others. '},
        { name: 'Kiwi', img: base_url+'kiwi.png', magic: 'named as the bird, but this one wont scape when you try to eat it.'},
        { name: 'Green apple', img:base_url+'green_apple.png', magic: 'like apples, but better regarding cholesterol control.'},
        { name: 'Banana', img:base_url+'banana.png', magic: 'rich in potasium, it also helps produce seratonin, the happiness enzime. '},
        { name: 'Oranges', img:base_url+'orange.png', magic: 'orange color, orange fruit, anything else needs to be said?.'}
    ], 
    restQuotes: [
        'Do you know when would be a good time to get up from your chair? Now.',
        'It would be a good time to stretch your legs.',
        'If you haven’t  cramped from sitting yet, you have time to stop for a bit.'
    ],
    restOverQuotes: [
        'It would be time to exercise the keyboard again.',
            'Time to re-exercise the brain.'
    ], 
    stretchQuotes: [
        {
            name: 'Elongation for hands',
            description: 'To prevent muscle contraction and joint strain after hours of writing, a practical exercise is to spread the fingers of the hands and hold possession for ten seconds. Repeat at least three times. ' ,
            extra: '',
            img: base_url+'stretch_busy.jpg'
        },
        {
            name: 'Neck and shoulder stretch',
            description: 'When sitting in the same position for a good stretch of the morning, the neck and shoulders are the first to suffer. Raising the arms and bringing them towards the nape of the neck so that they are aligned with the ears will stretch the stiff muscles The position must be held for three to five seconds, being repeated a maximum of five times. ',
            extra: '',
            img: base_url+'stretch_busy.jpg'
        },
        {
            name: 'Back and shoulder stretch',
            description: 'Every morning at the beginning of a new day, the back is stretched after hours of rest, but at the moment of stepping on the working floor it begins to stoop. To avoid stiffness, an excellent alternative is to clasp the hands behind the head with the elbows to the sides and push the shoulders back. Holding the position for eight to ten seconds will benefit the stretch. ',
            extra: '',
            img: base_url+'stretch_busy.jpg'
        },
        {
            name: 'Neck elongation',
            description: 'Maintaining the same position of the neck and back in the chair causes tension, the best way to release it is to turn the neck to the side, always over the shoulder, as if you wanted to turn to look behind. Do it two or three times lasting ten seconds will promote relaxation in the muscle area. ',
            extra: '',
            img: base_url+'stretch_busy.jpg'
        },
        {
            name: 'STOP',
            description: 'Its time to stretch for a minute, do the following routine',
            extra: 'https://www.youtube.com/watch?v=XY8nDWNefq4',
            img: base_url+'stretch_clock.jpg'
        },
        {
            name: 'How is your postural hygiene?',
            description: 'It is time to review how to sit well at work.',
            extra: 'https://www.youtube.com/watch?v=x5BI-dPT8GI&ab_channel=FisioOnline',
            img: base_url+'stretch_busy.jpg'
        }
    ]
} 