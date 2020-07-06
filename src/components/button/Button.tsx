import React from 'react';

export interface IButtonProps {
    label:string
}

const Button: React.FC<IButtonProps> = ({label }) => {
    return (
        <div className={"addtocart"}>
            <button className={"addtocart__button"}>
                {label}
            </button>
        </div>
    );
}

export default Button;