import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import StoreApi from '../services/store-api';
import '../index.css';
import { useCart } from '../context/CartContextState';
import { useTheme } from '../context/ThemeContext';
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

                : (<div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 m-3" style={{ marginTop: '2rem' }}>
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