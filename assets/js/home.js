// home js axios card and  add to localStorage 

let customers = document.getElementById("productDiv");

axios.get('https://dummyjson.com/products')
    .then(res => {
        db = res.data.products;
        db.map((item) => {
            let card = document.createElement('div');
            card.className = "dtcart";
            card.id = "cardBox"
            card.innerHTML = `
            <div onclick="adFav(${item.id})" id="addFav" class="divIconn"><i class="fa-regular fa-heart"></i></div>
                        <div style="text-align: center;  width: 200px;margin:0 auto;   height: 220px;">
                            <img style=" width: 200px;height: 220px;" src="${item.thumbnail}" alt="">
                        </div>
                        <div style="margin: 20px 0;">
                            <p id="priceCard">$ ${item.price}</p>
                        </div>
                        <button onclick="addToCart(${item.id})" id="addToCard"><i class="fa-solid fa-cart-shopping"></i>Move To Cart</button>
        `;
            customers.append(card);
        });
    });

function addToCart(productIndex) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(db.find(item => item.id === productIndex));
    localStorage.setItem('cart', JSON.stringify(cart));
}

function adFav(productIndexx) {
    let favCart = JSON.parse(localStorage.getItem('favcart')) || [];
    favCart.push(db.find(item => item.id === productIndexx));
    localStorage.setItem('favcart', JSON.stringify(favCart));
}




