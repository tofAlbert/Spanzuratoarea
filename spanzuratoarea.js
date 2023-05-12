
// Crearea cuvintelor
const cuvant = ["MARCEL", "BRENDA", "CRISAN", "MARINA", "GEORGETA", "ALEXANDRU", "ADRIAN"];

// Alegerea unui cuvant random
let cuvinteAleatoare = cuvant[Math.floor(Math.random() * cuvant.length)];

// Numarul de vieti
let vieti = 6;

// Crearea liniei
let linie = '';

// Creare elemente div
let divCuvant = document.createElement("div");
divCuvant.setAttribute("class", "cuvant");

// Creare paragraf pentru mesaj
let paragrafMesaj = document.createElement("p");
paragrafMesaj.setAttribute("class", "mesajul");

// Alegerea literelor
let litereElement = document.querySelectorAll(".letter");
let litere = document.querySelectorAll('.letter');

// Array pentru a stoca literele ghicite
let litereGhicite = [];

for (var letter in cuvinteAleatoare) {
    divCuvant.innerHTML += '_'
}

// Functia pentru a verifica daca litera este in cuvant
function verifica(litera) {

    let gasit = false;
    for (let i = 0; i < cuvinteAleatoare.length; i++) {
        if (cuvinteAleatoare[i] == litera) {
            gasit = true;
        }
    }
    if (gasit) {
        for (let i = 0; i < cuvinteAleatoare.length; i++) {
            if (cuvinteAleatoare[i] == litera) {
                litereGhicite[i] = litera;
            }
        }

        // Construirea liniei
        let linie = '';
        for (let i = 0; i < cuvinteAleatoare.length; i++) {
            if (litereGhicite[i]) {
                linie += litereGhicite[i];
            } else {
                linie += "_";
            }
        }

        // Afisarea liniei
        divCuvant.innerHTML = linie;
        castig();
    } else {
        // Scaderea vietilor
        vieti--;

        // show more of the man
        document.querySelector('#lives' + vieti).style.display = 'block'

        // Verificarea vietilor
        if (vieti == 0) {
            pierdut();
        } else {
            // Afisarea mesajului
            paragrafMesaj.innerHTML = "Ai gresit! Mai ai " + vieti + " vieti.";
        }
    }
}
// Functia pentru a verifica daca ai pierdut
function pierdut() {
    paragrafMesaj.innerHTML = "Ai pierdut! Cuvantul era " + cuvinteAleatoare + ".";
    litere.forEach(element => {
        element.setAttribute("disabled", true);
    });
}

// Functia pentru a verifica daca ai castigat
function castig() {
    if (divCuvant.innerHTML == cuvinteAleatoare) {
        paragrafMesaj.innerHTML = "Ai castigat!";
        paragrafMesaj.style.color = '#fff'
        litere.forEach(element => {
            element.setAttribute("disabled", true);
        });
        showFireworks()
    }
}



function showFireworks() {
    const desen = document.querySelector('.desen');
    const body = document.querySelector('body')
    const container = document.querySelector('#fireworks')
    desen.style.visibility = 'hidden'
    body.style.backgroundColor = '#000'
    const fireworks = new Fireworks.Fireworks(container, {
        autoresize: true,
        opacity: 0.5,
        acceleration: 1.05,
        friction: 0.97,
        gravity: 1.5,
        particles: 50,
        traceLength: 3,
        traceSpeed: 10,
        explosion: 5,
        intensity: 30,
        flickering: 50,
        lineStyle: 'round',
        hue: {
            min: 0,
            max: 360
        },
        delay: {
            min: 30,
            max: 60
        },
        rocketsPoint: {
            min: 50,
            max: 50
        },
        lineWidth: {
            explosion: {
                min: 1,
                max: 3
            },
            trace: {
                min: 1,
                max: 2
            }
        },
        brightness: {
            min: 50,
            max: 80
        },
        decay: {
            min: 0.015,
            max: 0.03
        },
        mouse: {
            click: false,
            move: false,
            max: 1
        }
    })
    fireworks.start()
}

// Adaugarea literelor
litereElement.forEach(element => {
    element.addEventListener("click", (e) => {
        element.setAttribute("disabled", true);
        let litera = element.innerHTML;
        verifica(litera);
    });
});

// Adaugarea cuvantului
document.querySelector(".cuvant").appendChild(divCuvant);
// Adaugarea mesajului
document.querySelector(".mesajul").appendChild(paragrafMesaj);
// Adaugarea butonului de restart
let butonRestart = document.querySelector(".restart");
butonRestart.addEventListener("click", () => {
    window.location.reload();
});
