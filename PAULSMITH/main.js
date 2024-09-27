let mainSection = document.getElementById("data-list-wrapper");

console.log(mainSection)

let productData = [];

fetchdata();

function fetchdata() {
    fetch(`http://localhost:3000/product-list`)
        .then((res) => res.json())
        .then((data) => {
            Cardlist(data)
            productData = data;
            console.log(data);
        })
        .catch((err) => {
            console.log("Error fetching data:", err);
        });
}


function Cardlist(data) {
    const store = data.map((el) => storeData(el.image, el.title, el.price))
    mainSection.innerHTML = store.join("")
}

function storeData(image, title, price, ) {
    let store =
        `
   <a href="descriptionpage.html?image=${encodeURIComponent(image)}&title=${encodeURIComponent(title)}&price=${encodeURIComponent(price)}">
   

    <div class="card" style="display:flex; justify-content:space-evenly; width:100%; padding:40px;">
        <div class="card-img" width="100%" height="200px display:flex;">
          <img src="${image}" alt="" width="100%" height="400px" style="padding:40px;">
        </div>    
        <p class="title"style="font-size:18px;">${title}</p>
        <p class="price">${price}</p>

        
      
    </div>


  
  </a>
  `
    return store;
}


// document.addEventListener("click", (e) => {
//     if (e.target.classList.contains("card-button")) {
//         console.log(e.target.dataset.id);
//         deleteProduct(e.target.dataset.id);
//     }
// });

// function deleteProduct(id) {
//     fetch(`http://localhost:3000/mens_featured_styles/${id}`, {
//             method: "DELETE"
//         })
//         .then((res) => res.json())
//         .then((data) => {
//             alert("Deleted....");
//             console.log(data);
//         })
//         .catch((err) => console.log(err));
// }