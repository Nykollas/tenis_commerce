import React, { useRef, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import BackButton from './BackButton';
import ProductDetailImage from './ProductDetailImage';
import DetailsBody from './DetailsBody';
import { Size, Button } from '../../components';
import "./style.css";

export interface IDetailsProps {
    
}

export interface IHistory {
    productImage?:string | undefined,
    productTitle?:string | undefined,
    productPrice?:number | undefined,
    background?:string | undefined
}

const Details: React.FC<IDetailsProps> = ({ }) => {

    const history= useHistory();
    const state:IHistory | undefined = history.location.state?.valueOf();
    useEffect(() => {
        window.scrollTo(0,0)        
    }, []);

    return (
        <div className={"details__container"}>
        <BackButton></BackButton>
        <ProductDetailImage background={state?.background}
                            productImageSrc={state?.productImage}>
                            </ProductDetailImage>
        <DetailsBody productPrice={state?.productPrice}
                     classificationNumber={1000}
                     productTitle={state?.productTitle}
                     classification={5}
                     ></DetailsBody>
        <div className={"details__more-container"}>
            <p className={"details__more"}>MORE DETAILS</p>
        </div>
        <Size></Size>
        <Button label={"+ ADD TO CART"}></Button>
    </div>
    );
}



export default Details;