import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {Accordeon} from "./Accordeon";

export default {
    title: 'Accordeon',
    component: Accordeon,
};


const callbackAct=action("Hide/Show block")
const callbackOnClickItem=action('some item was clicked')

let items = [{title:'hi', value:'1'},{title:'hey', value:'2'}, {title:'hello', value:'3'}];


export const AccordeonCollapsed = () =>   <Accordeon titleValue={"Users"} collapsed={true} changeCollepsed={()=>callbackAct()} items={items} onClick={callbackOnClickItem}/>;
export const AccordeonUnCollapsed = () =>   <Accordeon titleValue={"Users"} collapsed={false} changeCollepsed={()=>callbackAct()} items={items} onClick={callbackOnClickItem}/>;

export const AccordeonChanging = () => {
    let [collapsed, changeCollapsed] = useState<boolean>(false)
    // let [itemss, changeValue] = useState<any>(items)



    return <Accordeon titleValue={"Users"} collapsed={collapsed} changeCollepsed={()=>changeCollapsed(!collapsed)} items={items} onClick={callbackOnClickItem}/>
};
