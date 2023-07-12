import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import './main.css'
import { useDispatch, useSelector } from 'react-redux';
import { selectedProducts ,removeSelectedProducts  } from '../redux/actions/ProductActions';

function ProductDetail() {
    const product = useSelector((state) => state.product)
    const { image, title, price, category, description } = product;
    const { productId } = useParams();
    const dispatch = useDispatch()
    console.log(product);
    const fetchProductDetail = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`)
            .catch(err => {
                console.log("Err", err)
            })
        dispatch(selectedProducts(response.data));
    }
    useEffect(() => {
        if (productId && productId != "") {
            fetchProductDetail()
            return () =>{
                dispatch(removeSelectedProducts());
            }
        }
    }, [productId])
    return (
        <div className="ui grid container">
            {Object.keys(product).length === 0 ? (
                <div style={{marginTop:"80px",fontSize:"30px"}}>loading...</div>
            ) : (
                <div className="ui placeholder segment" style={{ marginTop: '50px' }}>
                    <div className="ui two column stackable center aligned grid">
                        <div className="ui vertical divider">AND</div>
                        <div className="middle aligned row">
                            <div className="column rp"> 
                                <img className="ui fluid image" src={image} />
                            </div>
                            <div className="column rp">
                                <h1>{title}</h1>
                                <h2 style={{ marginBottom: "30px" }}>
                                    <a className='ui teal tag label'>${price}</a>
                                </h2>
                                <h3 className='ui brown header' style={{ marginBottom: "50px" ,fontSize:"20px"}}>Category :- {category}</h3>
                                <p style={{ marginBottom: "70px" }}>{description}</p>
                                <div className="ui vertical animated button" tabIndex={0}>
                                    <div className="hidden content">
                                        <i className="shop icon " style={{ color: "white" }}></i>
                                    </div>
                                    <div className="visible content" style={{ color: "white" }} >Add to Cart</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
            }
        </div >
    )
}

export default ProductDetail