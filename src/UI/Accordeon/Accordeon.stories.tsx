import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {Accordeon} from "./Accordeon";

export default {
    title: 'Accordeon',
    component: Accordeon,
};


const callbackAct=action("Hide/Show block")

export const AccordeonCollapsed = () =>   <Accordeon titleValue={"Users"} collapsed={true} changeCollepsed={()=>callbackAct()}/>;
export const AccordeonUnCollapsed = () =>   <Accordeon titleValue={"Users"} collapsed={false} changeCollepsed={()=>callbackAct()}/>;

export const AccordeonChanging = () => {
    let [collapsed, changeCollapsed] = useState<boolean>(false)
    return <Accordeon titleValue={"Users"} collapsed={collapsed} changeCollepsed={()=>changeCollapsed(!collapsed)}/>
};
