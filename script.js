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

const API = "https://dummyjson.com/products";
const updateUI = (products) => {
    ul.innerHTML = "";
    products.forEach((product) => {
        console.log(products);
        const clone = temp.content.cloneNode(true);

        const h5 = clone.querySelector("h5");
        const h4 = clone.querySelector("h4");
        const a = clone.querySelector("a");
        const img = clone.querySelector("#img");
        const span = clone.querySelector("span");

        a.href = `/about.html?productID=${product.id}`;
        h5.textContent = product.title;
        h4.textContent = product.price + "$";
        img.src = product.thumbnail;
        span.textContent = product.brand;
        // ul.style.display = "flex";
        ul.appendChild(clone);
    });
};
const getData = async (url, method = "GET", data) => {
    overlay.classList.remove("hidden");
    const request = await fetch(url, {
        method,
        headers: {
            "Content-Type": "application/json",
        },
        body: data ? JSON.stringify(data) : null,
    });
    const response = await request.json();
    overlay.classList.add("hidden");

    return response;
};

getData(API)
    .then((data) => {
        updateUI(data.products);
    })
    .catch((error) => {
        console.log(error);
    });

// getData(API, "POST", newProduct)
//     .then(() => {
//         getData(API).then((data) => updateUI(data.data));
//     })
//     .catch((error) => console.log(error));
