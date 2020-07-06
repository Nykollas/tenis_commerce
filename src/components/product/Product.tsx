import React, { useEffect } from 'react';
import ProductClassification from './ProductClassification';
import { useHistory } from "react-router-dom";

import './style.css';

export interface IProductProps {
    productImage: string,
    background: string,
    productTitle: string,
    productPrice: number
}



const Product: React.FC<IProductProps> = ({
    productImage,
    background,
    productTitle,
    productPrice
}) => {

    const history = useHistory();




    return (
        <div onClick={() => {
                        history.replace("/details", [productImage, productPrice, productTitle])
                     }}
            className={"product"}
            style={{ background }}>

            <div className={"product__image"}>
                <div className={"product__card"}>
                    <img src={productImage}></img>
                </div>
                <div className={"product__viewbutton"}>

                </div>
            </div>
            <div className={"product__price-container"}>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <p className={"product__price"}>{"$" + productPrice}</p>
                    <ProductClassification score={4}></ProductClassification>
                </div>
                <p className={"product__title"}>{productTitle}</p>
            </div>
        </div>
    );
}

export default Product;
