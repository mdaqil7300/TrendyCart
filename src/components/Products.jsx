import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import StoreApi from '../services/store-api';
import '../index.css';
import { useCart } from '../context/cartState';
import { useSearchParams } from 'react-router-dom';

const Products = () => {
    const [products, setProducts] = useState([]);
    const { addToCart } = useCart();
    const [loading, setLoading] = useState(false)
    const [query, setQuery] = useSearchParams();
    const searchQuery = query.get('q')

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true)
            const products = searchQuery
                ? await StoreApi.getProductsByQuery(searchQuery)
                : await StoreApi.getAllProducts()
            setProducts(products)
            setLoading(false)
        }
        fetchProducts().catch(console.error)
    }, [searchQuery])

    if (!loading && searchQuery && !products.length) {
        return (
            <div>
                No mAtch found
            </div>
        )
    }
    return (
        <>
            {loading
                ? (<div className='parent'>
                    <span className="loader"></span>
                </div>)

                : (<div className="row row-cols-1 row-cols-md-4 m-5 m ">
                    {products.map((product) => (
                        <ProductCard key={product.id} data={product} addToCart={() => addToCart(product)} />
                    ))}
                </div>
                )
            }
        </>
    )
}

export default Products