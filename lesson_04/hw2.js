// Продолжить работу с интернет-магазином:
// В прошлом домашнем задании вы реализовали корзину на базе массивов.
// Какими объектами можно заменить их элементы ?
// Реализуйте такие объекты.
// Перенести функционал подсчета корзины на объектно - ориентированную базу.


let mybasket = [
    {
        product: "item1",
        price: 50
    },
    {
        product: "item2",
        price: 55
    },
    {
        product: "item3",
        price: 60
    },
    {
        product: "item4",
        price: 65
    }
];

class Basket {
    constructor(basket) {
        this.basket = basket;
    }

    countBasketPrice() {
        let basketPrice = 0;
        for (let i of this.basket) {
            basketPrice += i.price;
        }
        return basketPrice;
    }
}

let myshop = new Basket(mybasket);
console.log(`Стоимость корзины: ${myshop.countBasketPrice()}`); // Стоимость корзины: 230
