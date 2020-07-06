import React from 'react';

export interface IProductImageProps {
    productImage:string
}

const ProductImage: React.FC<IProductImageProps> = ({productImage }) => {
    return (
        <div className={"product__image"}>
            <div className={"product__card"}>
                <img src={productImage}></img>
            </div>
            <div className={"product__viewbutton"}>

            </div>
        </div>
    );
}

export { ProductImage };