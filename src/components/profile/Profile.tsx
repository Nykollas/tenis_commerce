import React from 'react';
import './style.css';

export interface IProfileProps {
    imgSrc:string
}

const Profile: React.FC<IProfileProps> = ({imgSrc }) => {
    return (
        <div className={'profile'}>
            <img src={imgSrc}></img>
        </div>
    );
}

export default Profile;