import { getDate } from "./request.js";

getDate("https://dummyjson.com/products")
    .then((data) => {
        console.log(data.thumbnail);
    })
    .catch((error) => {
        console.log(error);
    });
