


// Crearea cuvintelor
const cuvant = ["MARCEL", "BRENDA", "CRISAN", "MARINA", "GEORGETA", "ALEXANDRU", "ADRIAN"];

// Alegerea unui cuvant random
let cuvinteAleatoare = cuvant[Math.floor(Math.random() * cuvant.length)];

// Numarul de vieti
let vieti = 10;

// Crearea liniei
let linie = '';

// Creare elemente div
let divCuvant = document.createElement("div");
divCuvant.setAttribute("class", "cuvant");

// Creare paragraf pentru mesaj
let paragrafMesaj = document.createElement("p");
paragrafMesaj.setAttribute("class", "mesajul");

// Alegerea literelor
let litereElement = document.querySelectorAll("#letter");
let litere = document.querySelectorAll('#letter');

// Functia pentru a verifica daca litera este in cuvant
function verifica(litera){
    let gasit = false;

    for (let i = 0; i < cuvinteAleatoare.length; i++) {
        if(cuvinteAleatoare[i] == litera){
            gasit = true;
        }
    }
    if(gasit){
        for(let i = 0; i < cuvinteAleatoare.length; i++){
            if(cuvinteAleatoare[i] == litera){
                linie = linie + litera;
            }else{
                linie = linie + "_";
            }
        }
        // Afisarea liniei
        divCuvant.innerHTML = linie;
        linie = '';
        castig();
    }else{
        // Scaderea vietilor
        vieti--;
        // Verificarea vietilor
        if(vieti == 0){
            pierdut();
        }else{
            // Afisarea mesajului
            paragrafMesaj.innerHTML = "Ai gresit! Mai ai " + vieti + " vieti.";
        }
    }
}

// Functia pentru a verifica daca ai castigat
function castig(){
    if(divCuvant.innerHTML == cuvinteAleatoare){
        paragrafMesaj.innerHTML = "Ai castigat!";
        litere.forEach(element => {
            element.setAttribute("disabled", true);
        });
    }
}

// Functia pentru a verifica daca ai pierdut
function pierdut(){
    paragrafMesaj.innerHTML = "Ai pierdut! Cuvantul era " + cuvinteAleatoare + ".";
    litere.forEach(element => {
        element.setAttribute("disabled", true);
    });
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