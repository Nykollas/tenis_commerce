import React from 'react';
import StarIcon from '../../assets/images/icons/star';
export interface IDetailsBodyProps {
    productTitle:string | undefined,
    productPrice:number | undefined,
    classification:number | undefined,
    classificationNumber:number | undefined,
    
}

const DetailsBody: React.FC<IDetailsBodyProps> = ({productTitle,
                                                   productPrice,
                                                   classification,
                                                   classificationNumber }) => {
    return (
        <div className={"details__body"}>
            <div className={"details__data"}>
                <div className={"details__header"}>
                    <p className={"details__title"}>{productTitle}</p>
                    <p className={"details__price"}>{"$" + productPrice}</p>
                </div>
                <div className={"details__classification"}>
                    <div className={"details__stars"}>
                        {new Array(classification).fill(0).map(() => {
                            return <StarIcon height={12} width={12}></StarIcon>
                        })}
                    </div>
                    <p className="details__classifications-number">{classificationNumber}</p>
                </div>
                <p className={"details__description"}>
                    The Rebook Red Run is an amazing sportswear for the rest of us. Its affordable premium quality. The More your wear it the more you will enjoy it. The nylon mesh ensures air flow at maximum level. Our customers rated it top. Its also water & splash proof, makinf it the perfect companinon on rain.
            </p>
            </div>
        </div>
    );
}

export default DetailsBody;