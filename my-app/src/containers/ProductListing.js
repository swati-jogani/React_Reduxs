import React, { useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { setPtoducts } from '../redux/actions/ProductActions';
import ProductComponent from './ProductComponent';

function ProductListing() {
    const products = useSelector((state) => state)
    const dispatch = useDispatch();
    const fetchProducts = async () => {
        const response = await axios.get('https://fakestoreapi.com/products').catch((err) => {
            console.log("Err", err);
        })
        dispatch(setPtoducts(response.data))
    }
    useEffect(() => {
        fetchProducts()
    }, [])
    console.log("product", products);
    return (
        <>
            <h1 style={{marginTop:"80px",textAlign:"center"}}>
                    Product Category
            </h1>
            <div className='ui grid container' style={{ marginTop: "40px" }}>
                <ProductComponent />
            </div>
        </>
    )
}

export default ProductListing