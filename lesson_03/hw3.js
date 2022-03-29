// Товары в корзине хранятся в массиве.Задачи:
// a.Организовать такой массив для хранения товаров в корзине;
// b.Организовать функцию countBasketPrice, которая будет считать стоимость корзины.

let basket = [
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

function countBasketPrice(basket) {
    let basketPrice = 0;
    for (let i of basket) {
        basketPrice += i.price;
    }
    return basketPrice;
}

console.log(`Стоимость корзины: ${countBasketPrice(basket)}`);
