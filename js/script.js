// variabili
let i;

// ciclo

for (i = 1; i <= 100; i++) {
    let fizzModulus = (i) % 3;
    let buzzModulus = (i) % 5;

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
