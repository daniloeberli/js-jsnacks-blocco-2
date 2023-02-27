" use strict";

/*
Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.
*/

const nomi = ["pippo","pluto","luca","franco","alberto"];
const cognomi = ["rossi","bianchi","gialli","neri","grossi"];

for(let i= 0; i < 3; i++){
    let k = Math.floor(Math.random() * nomi.length);
    let j = Math.floor(Math.random() * cognomi.length);

    console.log (nomi[k]+' '+cognomi[j]);
}