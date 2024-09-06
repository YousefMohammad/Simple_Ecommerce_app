import React, { useEffect, useState } from "react";

import axios from 'axios'

import Product from './Product';

import '../assests/css/product.css';

function Products() {
    const apiUrl = "http://fakestoreapi.com/products"

    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);

    function getProducts(){

        axios.get(apiUrl)
            .then(res => setProducts(res.data))

    }

    function getCategories(){

        axios.get(`${apiUrl}/categories`)
            .then(res => setCategories(res.data))

    }

    function getProductInCategory(catName) {
        axios.get(`${apiUrl}/category/${catName}`)
            .then(res => setProducts(res.data))
    }

    useEffect(() => {

        getProducts()
        getCategories()
        

    }, [])
    return (
        <>
            <h2 className="text-center p-5"> Suggestions might be interested </h2>
            <div className="container mb-5">
            <ul className="d-flex">
                {
                categories.map((cat)=> {
                return <button key={cat} onClick={() => 
                    getProductInCategory(cat)
                } className="btn btn-outline-secondary me-3" > {cat}</button>
                })
                }   
            </ul>
                <div className="row card-container">
                    {
                        products.map((product) => (
                        <div className="col-lg-3 col-md-4 col-sm-6 p-2">
                        <Product product={product} ButtonShow={true} ShowDetails={false} d_img={" "} d_title={" "}/>
                    </div>
                    ))
                    }
                </div>
            </div>
        </>
    )
}

export default Products;