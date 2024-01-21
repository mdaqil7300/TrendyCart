import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './ProductCard.css'
import cartIcon from '../assets/addToCart.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

const ProductCard = () => {
    const [products, setProducts] = useState([]);

    const getAllProducts = () => {
        axios.get('https://fakestoreapi.com/products').then(response => {
            setProducts(response.data)
            console.log(response.data)
        })
    }
    useEffect(() => {
        getAllProducts();
    }, [])
    return (
        <>
            <div className="row row-cols-1 row-cols-md-4 m-5 m ">
                {products.map((item) => (
                    <div className="col" key={item.id}>
                        <div className="card productCard mb-5">
                            <img src={item.image} className="card-img-top imageSize" alt="..." />
                            <div className="card-body pb-0">
                                <OverlayTrigger
                                    key=''
                                    placement='top'
                                    overlay={
                                        <Tooltip id='tooltip'>
                                            {item.title}
                                        </Tooltip>
                                    }
                                >
                                    <h5 className="card-title cardTitle">
                                        {item.title.length > 20 ? `${item.title.substring(0, 20)}...` : item.title}
                                    </h5>
                                </OverlayTrigger>
                                <span className="card-text d-flex justify-content-between align-items-center mt-3">
                                    <span>${item.price}</span>
                                    <span>
                                        <img src={cartIcon} alt="" style={{ height: '40px', width: '40px' }} />
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </>
    )
}

export default ProductCard