const Speisen = ["Pizza Prosciuto", "Pizza Funghi", "Pizza Margherita ", "Spaghetti Pomodoro",
    "Spaghetti Bolognese"]

let Gerichteliste =
    [
        {

        "Speisen": Speisen[0],
        "Preis": "CHF 18.00",
        "Kalorien":"270 kcal"
        },{

        "Speisen": Speisen[1],
        "Preis": "CHF 19.00",
        "Kalorien":"240 kcal",

    },{

        "Speisen": Speisen[2],
        "Preis": "CHF 17.00",
        "Kalorien":"250 kcal",

    },{

        "Speisen": Speisen[3],
        "Preis": "CHF 17.00",
        "Kalorien":"220 kcal",

    },{

        "Speisen": Speisen[4],
        "Preis": "CHF 20.00",
        "Kalorien":"260 kcal",

    },

    ]



class User {
    constructor(name, job, hobby){
        this.name = name;
        this.job = job;
        this.hobby = hobby;

    }
}
var userOne = new User('Kimo Billeter', 'Mediamatiker', 'Videos editieren');
var userTwo = new User('Fabio Bauleo', 'Mediamatiker', 'Musik produzieren');

