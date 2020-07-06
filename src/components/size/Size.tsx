import React,{ useState} from 'react';
import SizeValue from './SizeValue';


export interface ISizeProps {

}


const Size: React.FC<ISizeProps> = ({ }) => {


    const [ selectedIndex, setSelectedIndex ] = useState(0);


    return (
        <div className={"details__size"}>
            <div className={"details__size-header"}>
                <p className={"size__title"}>
                    Size
                </p>
                <ul className={"size__countrys"}>
                    <li className={"size__country"}>USA</li>
                    <li className={"size__country"}>UK</li>
                    <li className={"size__country"}>CHINA</li>
                </ul>

            </div>
            <div className={"size__values"}>
                {new Array(5).fill(0).map((val, ind, arr) => {
                    if(ind == selectedIndex){
                        return <SizeValue  onClick={() => {setSelectedIndex(ind)}} selected value={(ind+8)+'"'}></SizeValue>
                    }else{
                        return <SizeValue  onClick={() => {setSelectedIndex(ind)}} value={(ind+8)+'"'}></SizeValue>
                    }
                })}


            </div>
        </div>
    );
}

export default Size;