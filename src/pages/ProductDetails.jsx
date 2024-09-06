import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Product from "./Product";

import axios from "axios";

import '../assests/css/ProductDetails.css'

function ProductDetails() {

    const apiUrl = "http://fakestoreapi.com/products";

    const [product, setProduct] = useState({});

    const params = useParams();

    useEffect(()=>{
        axios.get(`${apiUrl}/${params.productId}`)
        .then((product) => setProduct(product.data))
    },[params.productId])

    return (
        <>
        <Product product={product} ButtonShow={false} ShowDetails={true} d_img={"d-img"} d_title={"d-title"}/>
        </>
    )

}

export default ProductDetails;