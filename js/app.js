// Zodiac names

var zodiac =[
    {
        name: 'Capricorn',
        sign: "img/symbols/Capricorn.png",
        trait: "Blah",
        back: "img/background/Capricorn.jpg"
    },
    {
        name: 'Aquarius',
        sign: "img/symbols/Aquarius.png",
        trait: "Blah",
        back: "img/background/Aquarius.jpg"
    },
    {
        name: 'Pisces',
        sign: "img/symbols/Pisces.png",
        trait: "Blah",
        back: "img/background/Pisces.jpg"
    },
    {
        name: 'Aries',
        sign: "img/symbols/Aries.png",
        trait: "Blah",
        back: "img/background/Aries.jpg"
    },
    {
        name: 'Taurus',
        sign: "img/symbols/Taurus.png",
        trait: "Blah",
        back: "img/background/Taurus.jpg"
    },
    {
        name: 'Gemini',
        sign: "img/symbols/Gemini.png",
        trait: "Blah",
        back: "img/background/Gemini.jpg"
    },
    {
        name: 'Cancer',
        sign: "img/symbols/Cancer.png",
        trait: "Blah",
        back: "img/background/Cancer.jpg"
    },
    {
        name: 'Leo',
        sign: "img/symbols/Leo.png",
        trait: "Blah",
        back: "img/background/Leo.jpg"
    },
    {
        name: 'Virgo',
        sign: "img/symbols/Virgo.png",
        trait: "Blah",
        back: "img/background/Virgo.jpg"
    },
    {
        name: 'Libra',
        sign: "img/symbols/Libra.png",
        trait: "Blah",
        back: "img/background/Libra.jpg"
    },
    {
        name: 'Scorpio',
        sign: "img/symbols/Scorpio.png",
        trait: "Blah",
        back: "img/background/Scorpio.jpg"
    },
    {
        name: 'Sagittarius',
        sign: "img/symbols/Sagittarius.png",
        trait: "Blah",
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
