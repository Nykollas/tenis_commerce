import React from 'react';
import Category from './Category';
import { useState } from 'react';
import './style.css';

export interface ICategoriesProps {
    categoriesData: { imgSrc: string, title: string }[],
}

export interface ISelectedState {
    index: number
}

export interface IScrollingState {
    clicked:boolean
}





const Categories: React.FC<ICategoriesProps> = ({ categoriesData }) => {

    const initialState = {
        index: 0,
    }

    const [selectState, setSelectState] = useState<ISelectedState>(initialState);
    const [scrollingState, setScrollingState ] = useState<IScrollingState>({ clicked: false})

    const onMouseDown = () => {
        setScrollingState({clicked:true});
    }

    const onMouseUp = () => {
        setScrollingState({clicked:false});
    }
    
    const onmouseleave = () => {  
        setScrollingState({clicked:false});
    }
    
    const onMouseMove = (e:any) => {
        
        if(scrollingState.clicked){
            console.log(e.movementX);
            e.currentTarget.scrollLeft += -1 * e.movementX;
        }
    }

    return (
        <div onMouseDown={onMouseDown}
             onMouseMove={(e) => onMouseMove(e)}
             onMouseUp={onMouseUp}
             onMouseLeave={onmouseleave}
             className={"categories"}>
             {categoriesData.map((value, ind, arr) => {

                if (ind == selectState.index) {
                    return <Category
                        onClick={
                            () => {
                                setSelectState({ index: ind })
                            }
                        }
                        selected
                        imgSrc={value.imgSrc}
                        title={value.title}></Category>
                }

                return <Category 
                            onClick = {
                                        () => { 
                                            setSelectState({ index: ind }) 
                                        }
                                      }
                                imgSrc={ value.imgSrc }
                                title={ value.title }>
                        </Category>

            })}
            <div className={"categories__category--selected"}>
                <img className={"categories__category__icon"} src={""}></img>
            </div>
        </div>
    );
}

export default Categories;