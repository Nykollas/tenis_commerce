import React from 'react';
import ProductClassification from './ProductClassification';

import './style.css';

export interface IProductProps {
    productImage:string,
    background:string,
    productTitle:string,
}

const Product: React.FC<IProductProps> = ({productImage, background, productTitle}) => {
    return (
        <div className={"product"} style={{background}}>
            <div className={"product__image"}>
                    <div className={"product__card"}>
                        <img src={productImage}></img>
                    </div>
                    <div className={"product__viewbutton"}></div>
            </div>
            <div className={"product__price-container"}>
                <div style={{display:'flex', flexDirection:'row'}}>
                    <p className={"product__price"}>$00,00</p>
                    <ProductClassification score={4}></ProductClassification>
                </div>
                <p className={"product__title"}>{productTitle}</p>
            </div>
        </div>
    );
}

export default  Product;
