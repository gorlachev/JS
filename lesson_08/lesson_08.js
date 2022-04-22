/* 1. Продумать, где можно применить замыкания для практикума из седьмого урока. */
/* Замыкания можно использовать для подсчета товара в корзине, 
а также для индексации товара при формировании "базы данных" товаров */

/* 2. Не выполняя код, ответить, что выведет браузер и почему: */

// a)
if (!("a" in window)) { // из var a создается window.a, однако условие !window.a, 
    var a = 1; // поэтому до определения 'a' не доходит, так как утверждение ложно
} // т.е. атрибута «a» в window нет
alert(a); // undefined


// b)
var b = function a(x) {
    x && a(--x);
};
alert(a); // a is not defined - "а" - это имя функции и в теле функции не определено какое-либо действие.


// c)
function a(x) {
    return x * 2;
}
var a; // var переинициализирует переменную
alert(a); // function a(x) {return x * 2;} 

// d)
function b(x, y, a) {
    arguments[2] = 10;
    alert(a);
}
b(1, 2, 3); //10 - "a" и arguments[2] — это ссылка на одно и то же значение


// *e)
function a() {
    alert(this);
}
a.call(null); // [object Window]
/* this в глобальной области указывает на window. 
Вызов call() у функции с параметром null == вызов call() без аргументов */