// Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2,
//  operation), где arg1, arg2 — значения аргументов, operation — 
// строка с названием операции. В зависимости от переданного значения выполнить 
// одну из арифметических операций (использовать функции из пункта 5) 
// и вернуть полученное значение (применить switch).


function addNumbers(x, y) {
    return x + y;
}

function subtNumbers(x, y) {
    return x - y;
}

function multNumbers(x, y) {
    return x * y;
}
function divNumbers(x, y) {
    return x / y;
}

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case addNumbers:
            return addNumbers(arg1, arg2);
        case subtNumbers:
            return subtNumbers(arg1, arg2);
        case multNumbers:
            return multNumbers(arg1, arg2);
        case divNumbers:
            return divNumbers(arg1, arg2);
    }

}

console.log(mathOperation(5, 6, addNumbers)); // 11
console.log(divNumbers(5, 6, addNumbers));  // 0.8333333333333334