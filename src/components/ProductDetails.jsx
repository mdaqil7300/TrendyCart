import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import StoreApi from '../services/store-api';
import './ProductDetails.css';
import cartIcon from '../assets/addToCart.svg';
import '../index.css';
import { useCart } from '../context/cartState';


const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState();
    const { addToCart } = useCart();

    const fetchProduct = async () => {
        try {
            const product = await StoreApi.getSingleProduct(id);
            console.log(product, 'hellos')
            setProduct(product);
        } catch (error) {
            console.error('Error fetching product:', error);
        }
    };

    useEffect(() => {
        console.log('id:', id);
        if (id) {
            fetchProduct();
        }
    }, [id]);

    return (
        <>
            {product ?
                (<div className="card m-5 shadow" style={{ maxWidth: '850px' }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={product.image} className="img-fluid rounded-start imageSize" alt={product.title} />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{product.title}</h5>
                                <p className="card-text">{product.description}</p>
                            </div>
                            <div className="d-flex justify-content-between align-items-center p-5 ">
                                <span className='text-primary fw-bolder'>${product.price}</span>
                                <span style={{ cursor: 'pointer' }}>
                                    <img src={cartIcon} alt="" style={{ height: '40px', width: '40px' }} onClick={() => addToCart(product)} />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>)
                : (
                    <div className='parent'>
                        <span className="loader"></span>
                    </div>
                )}

        </>
    );
};

export default ProductDetails;