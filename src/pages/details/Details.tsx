import React, { Component } from 'react';
import StarIcon from '../../assets/images/icons/star';
import { Size, Button } from '../../components';
import "./style.css";

export interface IDetailsProps {

}

class Details extends Component<IDetailsProps> {
    render() {
        return (
            <div className={"details__container"}>
                <div className={"details__product"}>
                    <img className={"details__image"} src={require('../../assets/images/products/adidas.png')}></img>
                    <div className={"retangle"}></div>
                </div>
                <div className={"details__body"}>
                    <div className={"details__data"}>
                        <div className={"details__header"}>
                            <p className={"details__title"}>REEBOK RED RUN</p>
                            <p className={"details__price"}>$75</p>
                        </div>
                        <div className={"details__classification"}>
                            <div className={"details__stars"}>
                                <StarIcon height={12} width={12}></StarIcon>
                                <StarIcon height={12} width={12}></StarIcon>
                                <StarIcon height={12} width={12}></StarIcon>
                                <StarIcon height={12} width={12}></StarIcon>
                                <StarIcon height={12} width={12}></StarIcon>
                            </div>
                            <p className="details__classifications-number">8,712</p>
                        </div>
                        <p className={"details__description"}>
                            The Rebook Red Run is an amazing sportswear for the rest of us. Its affordable premium quality. The More your wear it the more you will enjoy it. The nylon mesh ensures air flow at maximum level. Our customers rated it top. Its also water & splash proof, makinf it the perfect companinon on rain.
                        </p>
                    </div>
                    <div className={"details__more-container"}>
                        <p className={"details__more"}>MORE DETAILS</p>
                    </div>
                    <Size></Size>
                    <Button label={"+ ADD TO CART"}></Button>

                </div>
            </div>
        );
    }
}

export default Details;