const productOrders = document.getElementById("productOrders");

function getCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    productOrders.innerHTML = ''
    cart.map((item, index) => {
        let card = document.createElement("div");
        card.className = "product-order";
        card.innerHTML = `
        <div class="product-order_left">
        <div class="product-img">
            <div class="product-img_wrapper">
                <img src="${item.thumbnail}" alt="">
            </div>
        </div>
        <div class="product-description">
            <h4>${item.title}</h4>
            <p>${item.description}</p>
            <button onclick="removeItem(${index})" type="button">Remove</button>
        </div>
        </div>
         <div class="product-order_right">
        <span class="product-price">$${item.price} </span>
        <select name="amount" id="" class="amount">
            <option value="1" selected>Qty: 1</option>
        </select>
        </div>
          `;
        productOrders.appendChild(card);
    });
    displayCartCount()
}

function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    cart.splice(index, 1)
    localStorage.setItem('cart', JSON.stringify(cart))
    getCart()
}

function removeAll() {
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    cart = ""
    localStorage.setItem('cart', JSON.stringify(cart))
    getCart()
}

function displayCartCount() {
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    document.getElementById("mycount").innerHTML = `${cart.length}`
}

let savedCards = document.getElementById("savedCards")
axios.get('https://dummyjson.com/products')
    .then(res => {
        db = res.data.products;
        db.map((item) => {
            let card = document.createElement('div');
            card.className = "savedCard";
            card.innerHTML = `
                        <div class="imgDiv">
                            <img src="${item.thumbnail}" alt="">
                        </div>
                        <div class="cardTxt">
                            <h4>$ ${item.price}</h4>
                            <p> ${item.title}</p>
                            <button class="btnSave"><i class="fa-solid fa-cart-shopping"></i>Move to cart</button>
                        </div>
        `;
            savedCards.append(card);
        });
    });


window.onload = () => {
    getCart()
}

