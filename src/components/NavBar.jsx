import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import cartIcon from '../assets/cart.svg'

const NavBar = ({ onSearch, cartIconCount }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const searchProducts = ((query) => {
        axios.get('https://fakestoreapi.com/products').then(response => {
            const result = response.json();
            console.log(result.filter((product) => product.title.toLowerCase().includes(query)))
        })
    })

    const handleInput = (e) => {
        setSearchQuery(e.target.value)
    }
    const handleSearch = () => {
        searchProducts(searchQuery)
    }

    return (
        <>
            <nav className="navbar" style={{ backgroundColor: '#e3f2fd' }}>
                <div className="container-fluid">
                    <Link to='/'>
                        <span className="navbar-brand mb-0 h1">TrendyCart</span>
                    </Link>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={handleInput} />
                        <button className="btn btn-outline-success" type="submit" onClick={handleSearch}>Search</button>
                    </form>
                    <Link to='/cart'>
                        <img src={cartIcon} alt="" style={{ height: '50px', width: '50px' }} />
                    </Link>
                </div>
            </nav>
        </>
    )
}

export default NavBar