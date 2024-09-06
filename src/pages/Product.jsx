import React from "react";

import { Link } from "react-router-dom";

import '../assests/css/product.css';

function Product(params) {
    
    const {product,ButtonShow,ShowDetails, d_img, d_title} = params;

    return (
        <>
        <div className="product-card card card-block">
            <div className="card-body">
                <h5 className={`"product-title  card-title p-2" ${d_title}`}>{product.title}</h5>
                <img src={product.image} alt='...' className={`"card-img-bottom" ${d_img}`}/>
                    {ButtonShow && <Link to={`/product/${product.id}`}><button className="btn btn-outline-primary p-2 card-btn"> More</button></Link> }
                    {
                        ShowDetails && ( 
                            <>
                            <p className="product-description"> {product.description} </p>
                            <span className="product-price"> {product.price}$ </span>
                            <button className="btn btn-outline-primary p-2 card-btn"> Buy it Now</button>

                            </>
                         ) 
                    }
            </div>
        </div>
        </>
    )

}

export default Product;