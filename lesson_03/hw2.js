// С этого урока начинаем работать с функционалом интернет - магазина.Предположим,
//есть сущность корзины.Нужно реализовать функционал подсчета стоимости корзины 
// в зависимости от находящихся в ней товаров.

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

let basketPrice = 0;

for (let i of basket) {
    basketPrice += i.price;
}

console.log(`Стоимость корзины: ${basketPrice}`);