/* 1. Реализовать страницу корзины:
a. Добавить возможность не только смотреть состав корзины, но и редактировать его, 
обновляя общую стоимость или выводя сообщение «Корзина пуста».
2. На странице корзины:
a. Сделать отдельные блоки «Состав корзины», «Адрес доставки», «Комментарий»;
b. Сделать эти поля сворачиваемыми;
c. Заполнять поля по очереди, то есть давать посмотреть состав корзины, внизу которого есть кнопка «Далее». 
Если нажать ее, сворачивается «Состав корзины» и открывается «Адрес доставки» и так далее.
4. * Для задачи со звездочкой из шестого урока реализовать функционал переключения между картинками по стрелкам на клавиатуре.
*/

let cart = [];
const cartInfoEl = document.querySelector('#cart');
const cartContentInfo = document.querySelector('main');


function saveCart() {
    window.localStorage.setItem('userCart', JSON.stringify(cart));
}


function loadCart() {
    cart = JSON.parse(window.localStorage.getItem('userCart')) || [];
}


loadCart()


function getCartPrice() {
    return cart.reduce(function (acc, product) {
        return acc + product.price * product.quantity;
    }, 0)
}


function getCartQuantity() {
    return cart.reduce(function (acc, product) {
        return acc + product.quantity;
    }, 0)
}


function getCartInfo() {
    if (cart.length == 0) {
        return 'Корзина пуста';
    }
    return `В корзине ${getCartQuantity()} товаров на сумму ${getCartPrice()} руб.`
}


function createCardEl(product) {
    const cardEl = document.createElement('DIV');
    const imgWrapper = document.createElement('DIV');
    const imgEl = document.createElement('IMG');
    const img2El = document.createElement('IMG');
    const img3El = document.createElement('IMG');
    const titleEl = document.createElement('P');
    const priceEl = document.createElement('P');
    const btnEl = document.createElement('BUTTON');

    cardEl.classList.add('product-card');
    imgWrapper.classList.add('product-card__img-wrapper');
    imgEl.classList.add('product-card__img');
    img2El.classList.add('product-card__img');
    img3El.classList.add('product-card__img');
    img2El.classList.add('product-card__img--small');
    img3El.classList.add('product-card__img--small');
    titleEl.classList.add('product-card__title');
    priceEl.classList.add('product-card__price');
    btnEl.classList.add('product-card__btn');

    imgEl.setAttribute('src', product.img[0]);
    img2El.setAttribute('src', product.img[1]);
    img3El.setAttribute('src', product.img[2]);
    titleEl.textContent = product.title;
    priceEl.textContent = product.price + ' руб.';
    btnEl.textContent = 'Удалить из корзины';

    btnEl.setAttribute('data-id', product.id)

    cardEl.append(imgEl);
    imgWrapper.append(img2El);
    imgWrapper.append(img3El);
    cardEl.append(imgWrapper);
    cardEl.append(titleEl);
    cardEl.append(priceEl);
    cardEl.append(btnEl);

    return cardEl;
}


function drawCartInfo() {
    cartInfoEl.textContent = getCartInfo();
}


function drawCart() {
    const cartContent = document.createElement('DIV');
    const cartTitle = document.createElement('H1');

    cartContent.classList.add('cart-content');
    cartContent.style.display = 'block';
    cartTitle.textContent = 'Состав корзины';

    cartContentInfo.append(cartContent);
    cartContent.append(cartTitle);

    for (let product of cart) {
        cartContent.append(createCardEl(product));
    }
}

function drawAddress() {
    const addressContent = document.createElement('DIV');
    const addressTitle = document.createElement('H1');

    addressContent.classList.add('address-content')
    addressContent.style.display = 'none';
    addressTitle.textContent = 'Адрес доставки';

    cartContentInfo.append(addressContent);
    addressContent.append(addressTitle);
    addressTitle.insertAdjacentHTML('afterend', '<form><label for= "fname" > First name:</> <br><input type="text" id="fname" name="fname"><br><label for="lname">Last name:</label><br><input type="text" id="lname" name="lname"></form>');
}

function drawComment() {
    const commentContent = document.createElement('DIV');
    const commentTitle = document.createElement('H1');

    commentContent.classList.add('comment-content');
    commentContent.style.display = 'none';
    commentTitle.textContent = 'Комментарий';

    cartContentInfo.append(commentContent);
    commentContent.append(commentTitle);
    commentTitle.insertAdjacentHTML('afterend', '<form><label for= "comment" > Комментарий:</> <br><input type="text" id="comment" name="comment"><br></form>');
}


function deleteCartEl(dataID) {
    const child = document.querySelector(`[data-id='${dataID}']`);
    if (child) child.parentElement.remove();
};


function deleteFromCart(id) {
    cart = cart.filter(x => {
        return x.id != id;
    })

    saveCart();
    drawCartInfo();

    console.log(cart)
}


cartContentInfo.addEventListener('click', function (e) {
    if (e.target.tagName == 'BUTTON') {
        deleteCartEl(e.target.dataset.id);
        deleteFromCart(e.target.dataset.id);
    }
})

const sectionOpen = document.querySelector('#further');

drawCartInfo()
drawCart()
drawAddress()
drawComment()

sectionOpen.addEventListener('click', function () {
    if (document.querySelector('.cart-content').style.display == 'block') {
        document.querySelector('.cart-content').style.display = 'none';
        document.querySelector('.address-content').style.display = 'block';
        document.querySelector('.comment-content').style.display = 'none';
        return;
    } else if (document.querySelector('.address-content').style.display == 'block') {
        document.querySelector('.cart-content').style.display = 'none';
        document.querySelector('.address-content').style.display = 'none';
        document.querySelector('.comment-content').style.display = 'block';
        return;
    } else if (document.querySelector('.comment-content').style.display == 'block') {
        document.querySelector('.cart-content').style.display = 'block';
        document.querySelector('.address-content').style.display = 'none';
        document.querySelector('.comment-content').style.display = 'none';
        return;
    }
})



