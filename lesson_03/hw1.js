// С помощью цикла while вывести все простые числа в промежутке от 0 до 100.

let a = 0;

while (a <= 100) {

    let notPrime = false;

    for (let i = 2; i <= a; i++) {
        if (a % i === 0 && i !== a) {
            notPrime = true;
        }
    }

    if (a !== 0 && a !== 1 && notPrime === false) {
        console.log(a);
    }

    a++;
}