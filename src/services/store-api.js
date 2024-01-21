import axios from "axios";

const StoreApi = {
    getAllProducts() {
        axios.get('https://fakestoreapi.com/products').then(response => {
            return response.json()
        })
        // fetch('https://fakestoreapi.com/products')
        //     .then(res => res.json())
        //     .then(json => console.log(json))
    },
    getSingleProduct(productId) {
        axios.get(`https://fakestoreapi.com/products/${productId}`).then(response => {
            return response.json()
        })
        // fetch('https://fakestoreapi.com/products/1')
        //     .then(res => res.json())
        //     .then(json => console.log(json))
    },
    getProductsByQuery(query) {
        axios.get('https://fakestoreapi.com/products').then(response => {
            const result = response.json();
            return result.filter((product) => product.title.toLowerCase().includes(query))
        })
    },
    getSortedProducts() {
        fetch('https://fakestoreapi.com/products?sort=desc')
            .then(res => res.json())
            .then(json => console.log(json))
    },
    getAllCategories() {
        fetch('https://fakestoreapi.com/products/categories')
            .then(res => res.json())
            .then(json => console.log(json))
    }
}

export default StoreApi