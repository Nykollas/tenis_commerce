import React, { Component, MouseEvent } from 'react';





export interface ICategoryProps {
    imgSrc: string,
    title: string,
    onClick:(event:MouseEvent) => void,
    selected?:boolean | undefined
}

export interface ICategoryState {
    selected:boolean
}

class Category extends Component<ICategoryProps, ICategoryState> {





    render() {

        const {
            imgSrc,
            title,
            selected,
            onClick
        } = this.props;

        return (
            <>
                <div  onClick={onClick} className={"category"}>
                    
                        <div className={selected ? "category__container--selected" : "category__container"}>
                            <img className={"category__icon"} src={imgSrc}></img>
                        </div>
                    
                    <label className="category__label">{title.toUpperCase()}</label>
                </div>
            </>
        );
    }
}

export default Category;