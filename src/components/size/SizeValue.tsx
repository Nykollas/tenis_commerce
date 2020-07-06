import React from 'react';

export interface ISizeValueProps {
    value:string,
    selected?:boolean,
    onClick:()=>void
}

const SizeValue: React.FC<ISizeValueProps> = ({value, selected, onClick}) => {
    return (
        <div onClick={onClick} className={selected ? "size__value--selected" : "size__value"}>
            {value}
        </div>
    );
}

export default  SizeValue;