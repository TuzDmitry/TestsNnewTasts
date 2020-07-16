import React, {useState} from 'react';
import './App.css';
import {Accordeon} from './UI/Accordeon/Accordeon';
import {Rating} from './UI/Rating/Rating';
import {OnOff} from './UI/OnOff/OnOff';
import {UnControlledAccordeon} from './UI/Accordeon/UnControlledAccordeon';
import {UnControledRating} from './UI/Rating/UncontrolRating';
import {UnControlledOnOff} from './UI/OnOff/UnControlledOnOff';

export type RaitingValueType = 0 | 1 | 2 | 3 | 4 | 5;


function App() {

    let [ratingValue, setRaitingValue] = useState<RaitingValueType>(0)
    let [collapsed, changeCollepsed] = useState(false)
    let [on, setOn] = useState(false)

    return (
        <div style={{display: "flex", justifyContent: "space-around"}}>
            <div>
                <div>Контролируемый</div>
                <Accordeon titleValue={"Users"} collapsed={collapsed} changeCollepsed={()=>{changeCollepsed(!collapsed)}}/>
                <Rating value={ratingValue} onClick={setRaitingValue}/>
                <OnOff on={on} setOn={setOn}/>{on.toString()}
            </div>
            <div>
                <div>НЕконтролируемый</div>
                <UnControlledAccordeon titleValue={"Followers"}/>
                <UnControledRating/>
                <UnControledRating/>
                <UnControledRating/>
                <UnControledRating/>
                <UnControledRating/>
                <UnControlledOnOff onChange={setOn} defaulValue={on}/>
            </div>
        </div>
    );
}

export default App;
