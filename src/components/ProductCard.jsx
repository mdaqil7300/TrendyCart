import './ProductCard.css';
import '../index.css'
import cartIcon from '../assets/addToCart.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProductCard = ({ data, addToCart }) => {
    const { id, image, title, price } = data;


    return (
        <>
            <div className="col" key={id}>
                <div className="card productCard mb-5 shadow">
                    <img src={image} className="card-img-top imageSize" />
                    <div className="card-body pb-0">
                        <OverlayTrigger
                            key=''
                            placement='top'
                            overlay={
                                <Tooltip id='tooltip'>
                                    {title}
                                </Tooltip>
                            }
                        >
                            <Link to={`/products/${id}`}>
                                <h5 className="card-title cardTitle">
                                    {title.length > 20 ? `${title.substring(0, 20)}...` : title}
                                </h5>
                            </Link>

                        </OverlayTrigger>
                        <span className="card-text d-flex justify-content-between align-items-center mt-3">
                            <span className='text-primary fw-bolder'>${price}</span>
                            <span>
                                <img onClick={addToCart} src={cartIcon} alt="" style={{ height: '40px', width: '40px' }} />
                            </span>
                        </span>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ProductCard;