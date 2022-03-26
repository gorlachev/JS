// 7. * Сравнить null и 0. Объяснить результат.

console.log(0 == null);  // false
console.log(0 === null); // false
console.log(0 != null);  // true

console.log(typeof 0);      // number
console.log(typeof null);   // object

// Значение null представляет отсутствие какого-либо объектного значения. 0 в свою очередь является типом "number"
