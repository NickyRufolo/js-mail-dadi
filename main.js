/*
1-Creare array contenente email (+ opportunità di inserire la propria)
2-Controllare se l'email è presente
    -se non è presente non puo accedere
    -se è presente vai avanti
3-Dopo controllo far comparire il gioco.
4-creare  una funzione che genera un numero da 1 a 6 
    -il primo per player
    - secondo per il bot
*/
const giocatori = [`nikirufolo@gmail.com`, `mecarm@gmail.com`, `cummarroc@gmail.com`];

function valida(){
    let email = document.getElementById("email").value;
    if (giocatori.includes(email) ){
        console.log(`Bentornato!!! ora puoi giocare :)`)
        document.getElementById(`Bentornato`).innerHTML = `Bentornato!!! ${email} ora puoi giocare :)`;
        document.getElementById(`Play`).className = `d-show`;
    } else {
        console.log('Non sei iscritto')
        document.getElementById(`Bentornato`).innerHTML = `Email non valida`;

    }
}


