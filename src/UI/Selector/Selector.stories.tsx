import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import { Selector } from './Selector';

export default {
    title: 'SelectorHandMade',
    component: Selector,
};


const callbackAct=action("Hide/Show block")

let items = [{title:'Minsk', value:1},{title:'Kyiv', value:2}, {title:'Moskow', value:3}];


export const SelectorHandMadeWithVal = () => {


    let [znach, changeZnach] = useState(2)

    return <Selector   items={items} onChange={changeZnach} value={znach}/>
};



export const SelectorHandMadeWithoutVal = () => {


    let [znach, changeZnach] = useState(null)

    return <Selector   items={items} onChange={changeZnach} value={znach}/>
};
