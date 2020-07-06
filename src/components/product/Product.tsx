import React, { useState } from 'react';
import ProductClassification from './ProductClassification';
import { useHistory } from "react-router-dom";

import './style.css';


export interface IProductsState {
    draggin:boolean
}

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

    const [dragging, setDragging ] = useState(false);

    return (
        <div onMouseDown={() => {
                setTimeout(() => setDragging(true), 100);
            }}
            onMouseUp={() => {
                                if(!dragging){
                                    history.replace("/details", {
                                        productImage:productImage,
                                        productPrice:productPrice,
                                        productTitle:productTitle, 
                                        background,
                                    })
                                }
                                setDragging(false);
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
