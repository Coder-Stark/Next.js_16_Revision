import axios from "axios";

let getProductDetails = () => {
    return axios.get(`https://dummyjson.com/products`)
    .then(res => res.data.products)
}

export {getProductDetails};