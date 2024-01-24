import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import cartIcon from '../assets/cart.svg'
import StoreApi from '../services/store-api';
import './NavBar.css'

const NavBar = ({ onSearch, cartIconCount }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [products, setProducts] = useState([])

    useEffect(() => {
        const searchProducts = async () => {
            const products = searchQuery
                ? await StoreApi.getProductsByQuery(searchQuery)
                : await StoreApi.getAllProducts()
            setProducts(products)
        }
        searchProducts().catch(console.error)
    }, [searchQuery])

    const handleSearch = () => {
        if (searchQuery.trim().length) {
            onSearch(searchQuery.trim())
        }
        setSearchQuery('')
    }

    return (
        <>
            <nav className="navbar" style={{ backgroundColor: '#e3f2fd' }}>
                <div className="container-fluid">
                    <Link to='/'>
                        <span className="navbar-brand mb-0 h1">TrendyCart</span>
                    </Link>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                        <button className="btn btn-outline-success" type="submit" onClick={handleSearch}>Search</button>
                    </form>
                    <div className="link-container">
                        <Link to='/cart'>
                            {cartIconCount > 0 && (
                                <span className="count">
                                    {cartIconCount <= 9 ? cartIconCount : '9+'}
                                </span>
                            )}
                            <img src={cartIcon} alt="" style={{ height: '50px', width: '50px' }} />
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar