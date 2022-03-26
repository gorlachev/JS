// * С помощью рекурсии организовать функцию возведения числа в степень. Формат: function
// power(val, pow), где val — заданное число, pow –— степень.

function power(val, pow) {
    if (pow === 0) return 1;
    let result = val;
    result = result * power(val, pow - 1)
    return result
}

console.log(power(2, 2)); // 4
console.log(power(2, 3)); // 8
console.log(power(2, 4)); // 16