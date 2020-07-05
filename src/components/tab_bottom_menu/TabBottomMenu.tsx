import React from 'react';
import HomeIcon from '../../assets/images/icons/home';
import GiftIcon from '../../assets/images/icons/gift';
import ShopIcon from '../../assets/images/icons/shop';
import HeartIcon from '../../assets/images/icons/heart';
import MenuIcon from '../../assets/images/icons/menu';

import './style.css';

export interface ITabBottomMenuProps {

}

const TabBottomMenu: React.FC<ITabBottomMenuProps> = ({ }) => {

    const width = 18;
    const height = 18;

    return (
        <div className={'tabbottom__menu'}>
            <div className={"tabbottom__icon"}>
                <HomeIcon height={height}
                    width={width}></HomeIcon>
            </div>
            <div className={"tabbottom__icon"}>
                <GiftIcon height={height}
                    width={width}></GiftIcon>
            </div>
            <div className={"tabbottom__shopicon"}>
                <div className={"tabbottom__circle-white"}>
                <div className={"tabbottom__circle-green"}>
                    <ShopIcon height={height}
                        width={width}></ShopIcon>
                </div>
                </div>

            </div>
            <div className={"tabbottom__icon"}>
                <HeartIcon height={height}
                    width={width}></HeartIcon>
            </div>
            <div className={"tabbottom__icon"}>
                <MenuIcon height={height}
                    width={width}></MenuIcon>
            </div>
        </div>
    );
}

export default TabBottomMenu;