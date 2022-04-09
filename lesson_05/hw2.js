/* Сделать генерацию корзины динамической: верстка корзины не должна находиться в HTML-структуре. 
Там должен быть только div, в который будет вставляться корзина, сгенерированная на базе JS: 
a. Пустая корзина должна выводить строку «Корзина пуста»;
b. Наполненная должна выводить «В корзине: n товаров на сумму m рублей».
*/

let mybasket = [
    {
        product: "item1",
        quantity: 2,
        price: 50
    },
    {
        product: "item2",
        quantity: 10,
        price: 55
    },
    {
        product: "item3",
        quantity: 1,
        price: 60
    },
    {
        product: "item4",
        quantity: 1,
        price: 65
    }];

console.log(mybasket)

class Basket {
    constructor(basket) {
        this.basket = basket;
    }

    countBasketPrice() {
        let basketPrice = 0;
        for (let i of this.basket) {
            basketPrice += i.price * i.quantity;
        }
        return basketPrice;
    }

    countBasketItems() {
        let numberOfGoods = 0;
        for (let i of this.basket) {
            numberOfGoods += i.quantity;
        }
        return numberOfGoods;
    }

}

let myshop = new Basket(mybasket);

let tag = document.createElement('p');
let textNode;

if (myshop.basket.length > 0) {
    textNode = document.createTextNode(`В корзине: ${myshop.countBasketItems()} товаров на сумму ${myshop.countBasketPrice()} рублей`);
} else if (myshop.basket.length == 0) {
    textNode = document.createTextNode('Корзина пуста');
}

tag.appendChild(textNode);
console.log(tag)

let element = document.getElementById('basket');
console.log(element);
element.appendChild(tag);
