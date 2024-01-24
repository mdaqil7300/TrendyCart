const StoreApi = {
    async getAllProducts() {
        const res = await fetch('https://fakestoreapi.com/products')
        const result = await res.json();
        return result;
    },
    async getSingleProduct(productId) {
        try {
            const res = await fetch(`https://fakestoreapi.com/products/${productId}`);
            console.log('Response:', res);

            const result = await res.json();
            console.log('Result:', result);

            return result;
        } catch (error) {
            console.error('Error fetching product:', error);
            throw error; // Rethrow the error to handle it in the calling function
        }
    },
    async getProductsByQuery(query) {
        const res = await fetch('https://fakestoreapi.com/products')
        const result = await res.json();
        return result.filter((product) => product.title.toLowerCase().includes(query));
    },
    async getSortedProducts() {
        const res = await fetch('https://fakestoreapi.com/products?sort=desc')
        const result = await res.json();
        return result;
    },
    async getAllCategories() {
        const res = await fetch('https://fakestoreapi.com/products/categories')
        const result = await res.json();
        return result;
    }
}

export default StoreApi