const queryString = window.location.search;
const query = new URLSearchParams(queryString);
const id = query.get("productID");
console.log(id);
const temp = document.querySelector("template");
const ul = document.querySelector(".pro-container");
const overlay = document.querySelector(".overlay");

function loader(state) {
    if (state) {
        overlay.classList.remove("hidden");
    } else {
        setTimeout(() => {
            overlay.classList.add("hidden");
        }, 5000);
    }
}
const h2 = document.querySelector(".d");
const h4 = document.querySelector("h4");
const a = document.querySelector("a");
const img = document.querySelector("#img");
const span = document.querySelector("span");
const page = document.querySelector("#page");

const API = "https://dummyjson.com/products";
const updateUI = (products) => {
    // page.href = `./pages/about.html?productID=${products.id}`;
    h2.textContent = `${products.title}`;
    h4.textContent = `${products.price + "$"}`;
    span.textContent = `${products.brand}`;
    img.src = `${products.thumbnail}`;
    // ul.appendChild(clone);
};
const getData = async (url, method = "GET", data) => {
    // overlay.classList.remove("hidden");
    const request = await fetch(url, {
        method,
        headers: {
            "Content-Type": "application/json",
        },
        body: data ? JSON.stringify(data) : null,
    });
    const response = await request.json();
    // overlay.classList.add("hidden");

    return response;
};

getData(API + `/${id}`)
    .then((products) => {
        updateUI(products);
    })
    .catch((error) => {
        console.log(error);
    });

// getData(API, "POST", newProduct)
//     .then(() => {
//         getData(API).then((data) => updateUI(data.data));
//     })
//     .catch((error) => console.log(error));
