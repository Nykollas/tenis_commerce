import React, { useState } from 'react';

import Product from '../product/Product';
import './style.css';

export interface IProductsProps {
    categorie: string,
    bgColors: string[],
    productImages: string[],
    productTitles: string[]
}

export interface IScrollingState {
    clicked: boolean
}
export interface ILeftState {
    left: number
}


const Products: React.FC<IProductsProps> = ({ categorie, bgColors, productImages, productTitles }) => {

    const [scrollingState, setScrollingState] = useState<IScrollingState>({ clicked: false })
    const [leftState, setLeftState] = useState<ILeftState>({ left: 0 });

    const onMouseDown = () => {
        setScrollingState({ clicked: true });
    }

    const onMouseUp = () => {
        setScrollingState({ clicked: false });
    }

    const onMouseLeave = () => {
        setScrollingState({ clicked: false });
    }

    const updateStyle = (child: HTMLDivElement,
        newStyle: string,
        preserveStyle?: { index: number }
    ) => {

        let previousStyle: string = child.getAttribute("style") as string;
        let styles: string[] = previousStyle.split(";");
        if (preserveStyle) {
            const { index } = preserveStyle;
            styles = styles.filter((val, ind, arr) => {
                if (ind == index) {
                    return val
                }
            });
        }
        styles.push(newStyle);
        newStyle = styles.join(";");
        child.setAttribute("style", newStyle);
    }

    const setProductsStyle = (children: HTMLDivElement[],
        increment: boolean,
        incrementValue: number,
        condition: boolean): void => {

        const { left } = leftState;

        let leftStateValue = increment ?
            { left: left + incrementValue }
            :
            { left: left - incrementValue }

        if (condition) {
            setLeftState(leftStateValue)
        }

        let translateX = left.toString().concat('px');

        let transformValue: string = "translate(" + translateX + ", 0)";

        const childrenArray: HTMLDivElement[] = [...children];

        childrenArray.map((child: HTMLDivElement): void => {
            let newStyle = "transform:".concat(transformValue);
            updateStyle(child, newStyle, { index: 0 })
        })
    }

    const onMouseMove = (e: any) => {

        e.preventDefault();

        const {
            currentTarget,
            movementX
        } = e;

        const {
            children,
            scrollWidth
        } = currentTarget;

        const { left } = leftState;

        if (scrollingState.clicked) {
            if (movementX > 0) {
                setProductsStyle(children, true, 24, left < 0);

            } else if (movementX < 0) {
                let condition = left >= (-1 * scrollWidth / 2.3);
                setProductsStyle(children, false, 24, condition);
            }
        }
    }

    return (
        <div className={"products"}>
            <div className={"products__header"}>
                <label className={"products__categorie-label"}>{categorie}</label>
                <p className={"products__more-button"}>{"More >".toUpperCase()}</p>
            </div>
            <div onMouseDown={onMouseDown}
                onMouseUp={onMouseUp}
                onMouseLeave={onMouseLeave}
                onMouseMove={onMouseMove}
                className={"products__list"}>
                <Product background={bgColors[0]}
                    productImage={productImages[0]}
                    productTitle={productTitles[0]}
                ></Product>
                <Product background={bgColors[1]}
                    productImage={productImages[1]}
                    productTitle={productTitles[1]}

                ></Product>
            </div>
        </div>
    );
}

export default Products;