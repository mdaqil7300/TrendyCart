import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import StoreApi from '../services/store-api';

const Products = () => {
    const [products, setProducts] = useState([]);

    const getAllProducts = async () => {
        const product = await StoreApi.getAllProducts();
        console.log(product)
        setProducts(product)
    }

    useEffect(() => {
        getAllProducts()
    }, []);
    return (
        <>
            <div className="row row-cols-1 row-cols-md-4 m-5 m ">
                {products.map((product) => (
                    <ProductCard key={product.id} data={product} addToCart={() => { }} />
                ))}
            </div>
        </>
    )
}

export default Products