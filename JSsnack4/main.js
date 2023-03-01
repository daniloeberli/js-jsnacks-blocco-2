/*
Il software deve chiedere per 5 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
Esegui questo programma in due versioni, con il for e con il while.
*/

/*
FOR
*/


//  let sum = 0;
//  let input;

//  for(let i = 0; i < 5; i++){
//      input = Number(prompt('Inserisci un numero'));
//      sum += input;
//  }

//  console.log(sum);

/*
WHILE   
*/

 let j = 0;
 let total = 0;

 while(j < 5){
     input = Number(prompt('Inserisci un numero'));
     total += input;
     j++;
 }

 console.log(total);