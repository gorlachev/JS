/* Сделать так, чтобы товары в каталоге выводились при помощи JS:
a. Создать массив товаров (сущность Product);
b. При загрузке страницы на базе данного массива генерировать вывод из него. 
HTML-код должен содержать только div id=”catalog” без вложенного кода. 
Весь вид каталога генерируется JS. */

let product = [
    {
        item: "Computer",
        price: 50
    },
    {
        item: "Printer",
        price: 55
    },
    {
        item: "Phone",
        price: 60
    },
    {
        item: "Scanner",
        price: 65
    }];

let element = document.getElementById('catalog');
let list = document.createElement("ul");

for (let i = 0; i < product.length; i++) {
    let item = document.createElement('li');
    item.appendChild(document.createTextNode(`${product[i].item} - ${product[i].price} руб.`));
    list.appendChild(item);
}

element.appendChild(list)