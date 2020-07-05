import React from 'react';
import  Star  from '../../assets/images/icons/star';
export interface IProductClassificationProps {
    score: number
}

const ProductClassification: React.FC<IProductClassificationProps> = ({ score }) => {
    return (
        <div className={"product__classification"}>
            {   new Array(score).fill(0).map(() => {
                        return <div className={"classification__star"}>
                                    <Star height={14} width={14}></Star>
                               </div>
                })
            }
        </div>
    );
}

export default  ProductClassification;