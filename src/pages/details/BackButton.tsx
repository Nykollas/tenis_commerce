import React from 'react';
import LeftArrow from '../../assets/images/icons/leftarrow';
import { useHistory } from 'react-router-dom';
export interface IBackButtonProps {
    
}

const BackButton: React.FC<IBackButtonProps> = ({ }) => {

    const history = useHistory();

    return (
        <div onClick= {() => { history.replace("/")}} className={"details__back-button"}>
            <LeftArrow height={24} 
                       width={24}></LeftArrow>
        </div>
    );
}

export default  BackButton;