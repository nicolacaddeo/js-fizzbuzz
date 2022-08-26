// variabili
let i;
const appContainer = document.getElementById('app-container');
// ciclo

for (i = 1; i <= 100; i++) {
    let fizzModulus = i % 3;
    let buzzModulus = i % 5;
    const element = document.createElement('div');
    if ((fizzModulus == 0) && (buzzModulus == 0)) {
        element.append('FizzBuzz');
    } else if (fizzModulus == 0) {
        element.append('Fizz');
    } else if (buzzModulus == 0) {
        element.append('Buzz');
    } else {
        element.append(i);
    }
    appContainer.append(element);

}

// algoritmo per stampare solo in console 
/*
for (i = 1; i <= 100; i++) {
    let fizzModulus = i % 3;
    let buzzModulus = i % 5;

    if ((fizzModulus == 0) && (buzzModulus == 0)) {
        console.log('FizzBuzz');
    } else if (fizzModulus == 0) {
        console.log('Fizz');
    } else if (buzzModulus == 0) {
        console.log('Buzz');
    } else {
        console.log(i);
    }

}
*/




