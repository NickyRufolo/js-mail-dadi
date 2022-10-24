


function lanciaDado() {
    let numeroRandom1 = Math.floor( Math.random() * 6 )+1;         //tra 0 e 6
    let numeroRandom2 = Math.floor( Math.random() * 6 )+1;         //tra 0 e 6

    document.querySelector(`img.img1`).setAttribute("src", "dice" + numeroRandom1 + ".png");
    document.querySelector(`img.img2`).setAttribute("src", "dice" + numeroRandom2 + ".png");

    if (numeroRandom1 === numeroRandom2) {
        document.querySelector(`body`).classList.remove(`red`, `green`);
        document.querySelector(`h1`).innerHTML = `Pareggio`;
    }
    else if (numeroRandom1 > numeroRandom2) {
            document.querySelector(`h1`).innerHTML = `Hai Vinto`;
            document.querySelector(`body`).classList.remove(`red`, `white`);
            document.querySelector(`body`).classList.add(`green`);
    }
    else if (numeroRandom1 < numeroRandom2) {
        document.querySelector(`h1`).innerHTML = `Hai Perso`;
        document.querySelector(`body`).classList.remove(`green`, `white`);
        document.querySelector(`body`).classList.add(`red`);
}
}
