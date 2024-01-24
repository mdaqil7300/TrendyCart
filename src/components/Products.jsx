import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import StoreApi from '../services/store-api';
import '../index.css'

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
            {products.length === 0
                ? (<div className='parent'>
                    <span className="loader"></span>
                </div>)

                : (<div className="row row-cols-1 row-cols-md-4 m-5 m ">
                    {products.map((product) => (
                        <ProductCard key={product.id} data={product} addToCart={() => { }} />
                    ))}
                </div>
                )
            }
        </>
    )
}

export default Products