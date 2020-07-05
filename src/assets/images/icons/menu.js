import React from 'react';

const MenuIcon = ({ height, width}) => {
    return (
        <svg width={width} height={height} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line y1="1.25" x2="18" y2="1.25" stroke="black" stroke-width="1.5" />
            <path d="M2.5 17.25H18" stroke="black" stroke-width="1.5" />
            <line x1="6" y1="9.25" x2="18" y2="9.25" stroke="black" stroke-width="1.5" />
        </svg>

    );
}

export default MenuIcon;