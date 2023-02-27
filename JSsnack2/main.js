"use strict"

/*
Inserisci un numero, se è pari stampa il numero,
se è dispari stampa il numero successivo
*/

let input = Number(prompt("Inserisci un numero"));

if(input % 2 === 0){
    alert(input);
}else{
    input++;
    alert(input);
}