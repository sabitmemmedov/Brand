let searchBtn = document.getElementById("searchBtn")
let urlData = window.location.search
let searchData = urlData.replace("?search=","")
var searchInput = document.getElementById("searchInput");
searchInput.setAttribute("value",searchData.toLowerCase())
console.log(searchInput.value);
let filterSearch = searchInput.value


function filterByTitle(e) {
    e.preventDefault()
    let searchInpp = document.getElementById("searchInput").value.toLowerCase()
    var myCards = document.getElementById("myCards")
    myCards.innerHTML = "";
    // Fetch data from the API
    fetch("https://dummyjson.com/products")
        .then(response => response.json())
        .then(data => {
            // Filter data based on the search input
            var filteredData = data.products.filter(function (item) {
                return item.title.toLowerCase().includes(searchInpp);
            });

            // Display filtered products
            if(searchInpp == ""){
                myCards = ""
            }else{
                filteredData.forEach(function (item) {
                    var myCard = document.createElement("div")
                    myCard.className = "myCard";
                    myCard.innerHTML = `<div class="img-div">
                    <img class="imggg" src="${item.thumbnail}" alt="">
                </div>
                <div class="text-div">
                    <h3>${item.title}</h3>
                    <p class="pricep">$ ${item.price}</p>
                    <div><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i
                            class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i
                            class="fa-solid fa-star"></i> <span
                            style="color: #FF9017;margin-right:40px;">7.5</span> <span
                            style="color:#8B96A5;margin-right:40px;">154 orders</span><span
                            style="color:#00B517; font-weight: 500;">Free
                            Shipping</span></div>
                    <p class="descrip" > ${item.description}</p>
                    <a href="#">Viwe details</a>
                </div>`
    
                    myCards.appendChild(myCard);
                });
            }
            
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
}

function filterByTitlee() {

    var myCards = document.getElementById("myCards")
    myCards.innerHTML = "";

    // Fetch data from the API
    fetch("https://dummyjson.com/products")
        .then(response => response.json())
        .then(data => {
            // Filter data based on the search input
            var filteredData = data.products.filter(function (item) {
                return item.title.toLowerCase().includes(filterSearch);
            });
            if(filterSearch == ""){
                myCards.innerHTML = ""
            }else{
                filteredData.forEach(function (item) {
                    var myCard = document.createElement("div")
                    myCard.className = "myCard";
                    myCard.innerHTML = `<div class="img-div">
                    <img class="imggg" src=${item.thumbnail} alt="">
                </div>
                <div class="text-div">
                    <h3>${item.title}</h3>
                    <p class="pricep">$ ${item.price}</p>
                    <div><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i
                            class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i
                            class="fa-solid fa-star"></i> <span
                            style="color: #FF9017;margin-right:40px;">7.5</span> <span
                            style="color:#8B96A5;margin-right:40px;">154 orders</span><span
                            style="color:#00B517; font-weight: 500;">Free
                            Shipping</span></div>
                    <p class="descrip" > ${item.description}</p>
                    <a href="#">Viwe details</a>
                    <div class="hicon"><i class="fa-regular fa-heart"></i></div>
                </div>`
    
                    myCards.appendChild(myCard);
                });
            }

            // Display filtered products
        
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
}
searchBtn.addEventListener("click" , filterByTitle)
window.onload = () => {
    filterByTitlee()
}