let products = [];
let cart = [];

let lastID = 1;

const cartInfoEl = document.querySelector('#cart');
const showcaseEl = document.querySelector('main');

function Product(title, price, img) {
    this.id = lastID++;
    this.title = title;
    this.price = price;
    this.img = img;
    this.quantity = 1;
}


function randomInt(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}


function genProduct() {
    const entities = ['Hat', 'Jacket', 'Shoes', 'Shirt', 'Skirt'];
    const colors = ['Yellow', 'Black', 'Green', 'White', 'Blue'];
    const title = `${colors[randomInt(0, colors.length - 1)]} ${entities[randomInt(0, entities.length - 1)]}`;
    const price = randomInt(99, 999);
    const img = [`img/${randomInt(1, 9)}.png`, `img/${randomInt(1, 9)}.png`, `img/${randomInt(1, 9)}.png`];
    return new Product(title, price, img);
}


function saveCart() {
    window.localStorage.setItem('userCart', JSON.stringify(cart));
}


function loadCart() {
    cart = JSON.parse(window.localStorage.getItem('userCart')) || [];
}


function loadCatalog() {
    for (let i = 0; i < 9; i++) {
        products.push(genProduct());
    }
}


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
    btnEl.textContent = 'В корзину';

    btnEl.setAttribute('data-id', product.id)

    cardEl.append(imgEl);
    imgWrapper.append(img2El);
    imgWrapper.append(img3El);
    cardEl.append(imgWrapper);
    cardEl.append(titleEl);
    cardEl.append(priceEl);
    cardEl.append(btnEl);

    // btnEl.addEventListener('click', function () { addToCart(product.id) });

    return cardEl;
}


function drawCartInfo() {
    cartInfoEl.textContent = getCartInfo();
}


function drawShowcase() {
    for (let product of products) {
        showcaseEl.append(createCardEl(product));
    }
}


function addToCart(id) {
    const existsProduct = cart.find(function (product) { return product.id == id });
    if (existsProduct) {
        existsProduct.quantity++;
        drawCartInfo();
        saveCart()
        return;
    }
    const product = Object.assign({}, products.find(function (product) { return product.id == id }));
    cart.push(product);
    drawCartInfo();
    saveCart();
}

loadCatalog();
loadCart();
drawCartInfo();
drawShowcase();

showcaseEl.addEventListener('click', function (e) {
    if (e.target.tagName == 'BUTTON') {
        addToCart(e.target.dataset.id); // == (e.target.getAttribute('data-id'))
    }
})


