import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {OnOff} from "../OnOff/OnOff";

export default {
    title: 'OnOffStories',
    component: OnOff,
};


const callbackAct=action("ON/OFF clicked")

export const On = () =>  <OnOff on={true} setOn={callbackAct}/>;
export const Off = () => <OnOff on={false} setOn={callbackAct}/>;

export const OnOffChanging = () => {
    let [on, setOn] = useState<boolean>(false)
    return <OnOff on={on} setOn={setOn}/>
};
