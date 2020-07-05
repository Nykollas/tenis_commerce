import React, { useState } from 'react';
import './style.css';


export interface ISexProps {

}

export interface ISexState {
    male: boolean
}

const Sex: React.FC<ISexProps> = ({ }) => {

    const [sexState, setSexState] = useState<ISexState>({ male: false });

    return (
        <div onClick={
                () => setSexState({ male: !sexState.male })
            }
            className="sex">

            <div className={sexState.male ? "sex__input--selected" : "sex__input"}>
                <label className={sexState.male ? "sex__label--selected" : 'sex__label'}>{"Men".toUpperCase()}</label>
            </div>

            <div className={!sexState.male ? "sex__input--selected" : "sex__input"}>
                <label className={!sexState.male ? "sex__label--selected" : 'sex__label'}>{"Women".toUpperCase()}</label>
            </div>

        </div>
    );
}

export default Sex;