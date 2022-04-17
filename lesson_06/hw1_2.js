/* 1. Продолжаем реализовывать модуль корзины:
a. Добавлять в объект корзины выбранные товары по клику на кнопке «Купить» без перезагрузки страницы;
b. Привязать к событию покупки товара пересчет корзины и обновление ее внешнего вида. 

*2. У товара может быть несколько изображений. Нужно:
a. Реализовать функционал показа полноразмерных картинок товара в модальном окне;
b. Реализовать функционал перехода между картинками внутри модального окна. */

/* самостоятельная реализация, без учета кода, написанного на уроке */

let wares = [
    {
        name: "Bananas",
        quantity: 1,
        imgs: ['https://m.media-amazon.com/images/I/61fZ+YAYGaL._SL1500_.jpg',
            'https://cdn1.sph.harvard.edu/wp-content/uploads/sites/30/2018/08/bananas-1354785_1920.jpg',
            'https://bjs.scene7.com/is/image/bjs/14526?$bjs-Zoom$'],
        price: 50
    },
    {
        name: "Oranges",
        quantity: 1,
        imgs: ['https://images.heb.com/is/image/HEBGrocery/000375170',
            'https://images.heb.com/is/image/HEBGrocery/000375169?fit=constrain,1&wid=800&hei=800&fmt=jpg&qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0',
            'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/half-of-orange-on-the-heap-of-oranges-royalty-free-image-1598525395.jpg'],
        price: 55
    },
    {
        name: "Pears",
        quantity: 1,
        imgs: ['https://images.heb.com/is/image/HEBGrocery/000513694',
            'https://m.media-amazon.com/images/I/71YPjsEyo7L._AC_SX522_.jpg',
            'https://static.libertyprim.com/files/familles/poire-large.jpg?1569271830'],
        price: 60
    },
    {
        name: "Apples",
        quantity: 1,
        imgs: ['https://images.heb.com/is/image/HEBGrocery/000466634',
            'https://cdn11.bigcommerce.com/s-kgo23u8qny/images/stencil/1280x1280/products/118/385/Apples__51449.1585426423.jpg?c=1',
            'https://media.nedigital.sg/fairprice/fpol/media/images/product/XL/13139216_XL1_20210511.jpg'],
        price: 65
    }
]

let catalog = document.getElementById('catalog');

for (let i = wares.length - 1; i >= 0; i--) {
    catalog.insertAdjacentHTML('afterbegin',
        `<p>${wares[i].name} - ${wares[i].price} руб.</p>
        <div>
        <img class='img' src=${wares[i].imgs[0]}>
        <img class='img' src=${wares[i].imgs[1]}>
        <img class='img' src=${wares[i].imgs[2]}>
        </div>
        <div class='mySlides'><img src=${wares[i].imgs[0]}></div>
        <div class='mySlides'><img src=${wares[i].imgs[1]}></div>
        <div class='mySlides'><img src=${wares[i].imgs[2]}></div>
        <div class='btn'>Добавить в корзину</div>`)
}


class Basket {
    itemsInBasket = [];

    countBasketPrice() {
        let basketPrice = 0;
        for (let item of this.itemsInBasket) {
            basketPrice += item.price * item.quantity;
        }
        return basketPrice;
    }

    countBasketItems() {
        let numberOfGoods = 0;
        for (let item of this.itemsInBasket) {
            numberOfGoods += item.quantity;
        }
        return numberOfGoods;
    }

    addToBasket(item) {
        this.itemsInBasket.push(item)
    }

}


// подсчет товаров в корзине

const myshop = new Basket();
const element = document.getElementById('basket');
const tag = document.createElement('P')
tag.textContent = 'Корзина пуста'
element.appendChild(tag)

function updateMessage() {
    element.removeChild(tag)
    if (myshop.itemsInBasket.length > 0) {
        tag.textContent = `В корзине: ${myshop.countBasketItems()} товаров на сумму ${myshop.countBasketPrice()} рублей`
    } else if (myshop.itemsInBasket.length == 0) {
        tag.textContent = 'Корзина пуста'
    }
    element.appendChild(tag)
}

// реализация функционала кнопки
const btns = document.querySelectorAll(".btn")

function addPrice(btn, index) {
    btn.addEventListener('click', () => {
        myshop.addToBasket(wares[index])
        updateMessage()
    })
}

for (let i = btns.length - 1; i >= 0; i--) {
    addPrice(btns[i], i)
}

// реализация модального окна
const images = document.querySelectorAll('.img');
const slides = document.querySelectorAll('.mySlides')


for (let i = images.length - 1; i >= 0; i--) {
    images.item(i).addEventListener('click', () => {
        slides.item(i).classList.toggle('showSlides')
    })
}

slides.forEach((i) => {
    i.addEventListener('click', (e) => {
        i.classList.toggle('showSlides')
    })
})