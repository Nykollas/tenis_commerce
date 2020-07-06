import React from 'react';

export interface IProductDetailImageProps {
    productImageSrc:string | undefined,
    background:string | undefined
}

const ProductDetailImage: React.FC<IProductDetailImageProps> = ({productImageSrc, background }) => {
    return (
        <div className={"details__product"}>
            <img className={"details__image"} src={productImageSrc ? productImageSrc : ""}></img>
            <div className={"retangle"} style={{background}}></div>
        </div>
    );
}

export default ProductDetailImage;