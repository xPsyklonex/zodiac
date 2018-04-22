// Zodiac names

var zodiac =[
    {
        name: 'Capricorn',
        sign: "img/symbols/Capricorn.png",
        trait: " You’re boring and lame, but you can’t see it. You have trouble seeing anything past yourself. What is empathy? You have no idea. You have personality traits akin to psychopaths and serial killers.",
        back: "img/background/Capricorn.jpg"
    },
    {
        name: 'Aquarius',
        sign: "img/symbols/Aquarius.png",
        trait: "You are melodramatic and willing to start problems for your own personal enjoyment. You are a pot stirrer. You're too detached to care, but you’re good at pretending and playing all sides.",
        back: "img/background/Aquarius.jpg"
    },
    {
        name: 'Pisces',
        sign: "img/symbols/Pisces.png",
        trait: "You need to be needed, so much so you can manipulate people into relying on you, using them for your own personal gain. You’re selfish and no one will ever be good enough for you and your elevated version of yourself.",
        back: "img/background/Pisces.jpg"
    },
    {
        name: 'Aries',
        sign: "img/symbols/Aries.png",
        trait: "You are blunt and confrontational. Your condescension and fighting attitude makes you a little scary. You call yourself a leader, but you’re really a bully. You could make a grown man cry.",
        back: "img/background/Aries.jpg"
    },
    {
        name: 'Taurus',
        sign: "img/symbols/Taurus.png",
        trait: "BlahYou are susceptible to obsession and stalking due to your possessive and jealous nature. One day you might carry out a “Fatal Attraction” like obsession with an ex-lover. When you want someone or something, you will stop at nothing to get it.",
        back: "img/background/Taurus.jpg"
    },
    {
        name: 'Gemini',
        sign: "img/symbols/Gemini.png",
        trait: " You are two-faced with a dual personality. You’re tendency to switch moods without warning scares the shit out of everyone. You have the personality of a mad scientist or an evil dictator. You could very well kill us all.",
        back: "img/background/Gemini.jpg"
    },
    {
        name: 'Cancer',
        sign: "img/symbols/Cancer.png",
        trait: "You believe you are always the victim. You are ruled by your emotions, and those emotions can anger you into exacting revenge on those who hurt you, even if the hurt is imaginary.",
        back: "img/background/Cancer.jpg"
    },
    {
        name: 'Leo',
        sign: "img/symbols/Leo.png",
        trait: "You are demanding. You seek to control everyone around you through master manipulation. You're the evil queen in Snow White: wicked, but so vain you must look in the mirror and validate yourself during your evil plans. You serve you and only you.",
        back: "img/background/Leo.jpg"
    },
    {
        name: 'Virgo',
        sign: "img/symbols/Virgo.png",
        trait: "You are grumpy. You have the personality of the old neighbor who yells at the paperboy. You are critical in the name of tough love. You are a dream crusher and feeling abuser.",
        back: "img/background/Virgo.jpg"
    },
    {
        name: 'Libra',
        sign: "img/symbols/Libra.png",
        trait: "You are superficial and indecisive. You use charm as a manipulative tactic and you always get your way. You will take down even your closest friend with your “succeed at all costs” attitude. They won’t even see you coming.",
        back: "img/background/Libra.jpg"
    },
    {
        name: 'Scorpio',
        sign: "img/symbols/Scorpio.png",
        trait: "You’re rage and heartlessness makes you the most prone to evil out of all the signs. You draw them in with your sex appeal and then ruin their life-- and you love it. People’s feelings are a game to you, and you have to win. You might be pure evil.",
        back: "img/background/Scorpio.jpg"
    },
    {
        name: 'Sagittarius',
        sign: "img/symbols/Sagittarius.png",
        trait: "The epitome of a “can dish it, but can’t take it” personality. You are the most blunt person in the room, but you consider any form of critique a personal attack. You draw people in, but then kill them with your lack of self awareness.",
        back: "img/background/Sagittarius.jpg"
    }
]
// get user input
var userInput = document.getElementById('user-input');

var zName = document.getElementById("name");
var zSign = document.getElementById("sign");
var zTrait = document.getElementById("trait");
var zBack = document.getElementById("back")

// writes to index.html
function getHoro() {
    for(var i=0; i < zodiac.length; i++) {
        if(userInput.value.toLowerCase() == zodiac[i].name.toLocaleLowerCase()){
            zName.innerText = zodiac[i].name;
            zSign.src = zodiac[i].sign;
            zTrait.innerText = zodiac[i].trait;
            zBack.src = zodiac[i].back;

        }
    }
} 
