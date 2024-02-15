const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");
const products = [
    {
        id:1,
        title: "BROOKLYN NETS JERSEY",
        price: 120,
        colors: [
            {
                code: "rgb(110, 164, 236)",
                img: "./img/kyriejerseypowder.png"
            },
            {
                code: "darkblue",
                img: "./img/kyriejerseydark.png",
            },
        ],
    },
    {
        id:2,
        title: "NEW YORK METS JERSEY",
        price: 130,
        colors: [
            {
                code: "white",
                img: "./img/metsjerseywhite.png"
            },
            {
                code: "royalblue",
                img: "./img/metsjerseyblue.png",
            },
        ],
    },
    {
        id:3,
        title: "NEW YORK JETS JERSEY",
        price: 130,
        colors: [
            {
                code: "green",
                img: "./img/jetsjerseywhite.png"
            },
            {
                code: "black",
                img: "./img/jetsjerseyblack.png",
            },
        ],
    },
    {
        id:4,
        title: "NEW YORK ISLANDERS JERSEY",
        price: 120,
        colors: [
            {
                code: "orange",
                img: "./img/islesjerseywhite-removebg-preview.png"
            },
            {
                code: "darkblue",
                img: "./img/islesjerseydrk.png",
            },
        ],
    },
    {
        id:5,
        title: "TEAM INDIA JERSEY",
        price: 115,
        colors: [
            {
                code: "royalblue",
                img: "./img/indiajerseyblue2.png"
            },
            {
                code: "darkblue",
                img: "./img/indiajerseyblue1.png",
            },
        ],
    },
    
];

let chosenProduct = products[0]

const currProductImg = document.querySelector(".productImg");
const currProductTitle = document.querySelector(".productTitle");
const currProductPrice = document.querySelector(".productPrice");
const currProductColor = document.querySelectorAll(".color");
const currProductSize = document.querySelectorAll(".size");

menuItems.forEach((item,index)=>{
    item.addEventListener("click",()=>{
        // changes current slide
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        //change the chosen product
        chosenProduct = products[index];

        //change text of curr product
        currProductTitle.textContent = chosenProduct.title;
        currProductPrice.textContent = "$" + chosenProduct.price;
       
        //changing img of curr product
        currProductImg.src = chosenProduct.colors[0].img;
        
        //changing colors of curr product
        currProductColor.forEach((currProductColor,index) => {
            currProductColor.style.backgroundColor = chosenProduct.colors[index].code;
        });
    });
});


currProductColor.forEach((color,index) =>{
    color.addEventListener("click",()=>{
        currProductImg.src = chosenProduct.colors[index].img
    });
});

currProductSize.forEach((size,index)=>{
    size.addEventListener("click",()=>{
        currProductSize.forEach((size)=>{
            size.style.backgroundColor = "whitesmoke";
            size.style.color = "black";
        });
        size.style.backgroundColor = "black"
        size.style.color = "white"
    });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click",()=>{
   payment.style.display = "flex"

})
close.addEventListener("click",()=>{
   payment.style.display = "none"

})
const TAX_RATE = 0.08;
const SHIPPING_FEE = 15;

let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(productId, quantity) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingProduct = cart.find(item => item.id === productId);
    if (existingProduct) {
        existingProduct.quantity += quantity;
    } else {
        cart.push({ ...product, quantity });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
}

document.querySelector('.payButton').addEventListener('click', () => {
    localStorage.setItem('canAccessCart', 'true');
    window.location.href = 'cart.html';
});


