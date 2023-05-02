// menu
let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

// close
window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

document.querySelector('#search-icon').onclick = () => {
    document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick = () => {
    document.querySelector('#search-form').classList.remove('active');
}

// slide

var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
});



var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        },

    }
});



// map-- -- -- -- -- -- -- -- -- -- -

var list_food = [{
        img: './images/sandwich.png',
        name_food: 'tasty food',
        price: '$15.99'
    },
    {
        img: './images/hamber.png',
        name_food: 'tasty food',
        price: '$15.99'
    },
    {
        img: './images/donuts.png',
        name_food: 'tasty food',
        price: '$15.99'
    },
    {
        img: './images/crispy-fried-chicken.png',
        name_food: 'tasty food',
        price: '$15.99'
    },
    {
        img: './images/chocolate-ice-cream.png',
        name_food: 'tasty food',
        price: '$15.99'
    },
    {
        img: './images/kimpab.png',
        name_food: 'tasty food',
        price: '$15.99'
    },
    {
        img: './images/peakake.png',
        name_food: 'tasty food',
        price: '$15.99'
    },
    {
        img: './images/q-removebg-preview.png',
        name_food: 'tasty food',
        price: '$15.99'
    },
    {
        img: './images/3-removebg-preview.png',
        name_food: 'tasty food',
        price: '$15.99'
    },
    {
        img: './images/2-removebg-preview.png',
        name_food: 'tasty food',
        price: '$15.99',
    }

]

function render_food(params) {
    return `
        <div class="box">
            <a href="#"><i class="fa-solid fa-heart"></i></a>
            <a href="#"><i class="fa-solid fa-eye"></i></a>
            <img src="${params.img}" alt="">
            <h3>${params.name_food}</h3>
            <div class="starts">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star-half-stroke "></i>
            </div>
            <span>${params.price} /</span>
            <a href="#" class="btn">add to cart</a>
        </div>
    `
};

var newlist = list_food.map(render_food);

document.getElementById("box-food").innerHTML = newlist.join('');

// map end------------->

var list_menu = [{
        img: './images/img1-removebg-preview.png',
        name_menu: 'delicious food',
        price: '$10.99',
        content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit, Excepturi, accusantium.'

    },
    {
        img: './images/img2-removebg-preview.png',
        name_menu: 'delicious food',
        price: '$10.99',
        content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit, Excepturi, accusantium.'
    },
    {
        img: './images/img3-removebg-preview.png',
        name_menu: 'delicious food',
        price: '$10.99',
        content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit, Excepturi, accusantium.'
    },
    {
        img: './images/img4-removebg-preview.png',
        name_menu: 'delicious food',
        price: '$10.99',
        content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit, Excepturi, accusantium.'
    },
    {
        img: './images/img5-removebg-preview.png',
        name_menu: 'delicious food',
        price: '$10.99',
        content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit, Excepturi, accusantium.'
    },
    {
        img: './images/img6-removebg-preview.png',
        name_menu: 'delicious food',
        price: '$10.99',
        content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit, Excepturi, accusantium.'
    },
    {
        img: './images/img7-removebg-preview.png',
        name_menu: 'delicious food',
        price: '$10.99',
        content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit, Excepturi, accusantium.'
    },
    {
        img: './images/img8-removebg-preview.png',
        name_menu: 'delicious food',
        price: '$10.99',
        content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit, Excepturi, accusantium.'
    },
]

function render_menu(params) {
    return `
    <div class="box">
        <div class="image">
            <img src="${params.img}" alt="">
            <a href="#" class="fa-solid fa-heart"></a>
        </div>
        <div class="content">
            <div class="starts">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star-half-stroke "></i>
            </div>
            <h3>${params.name_menu}</h3>
            <p>${params.content}</p>
            <a href="#" class="btn">add to cart</a>
            <span class="price">${params.price}</span>
        </div>
    </div>
    `
};

var newlist = list_menu.map(render_menu);
document.getElementById("box_menu").innerHTML = newlist.join('');

// loader
function loader() {
    document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut() {
    setInterval(loader, 4000);
}

window.onload = fadeOut;