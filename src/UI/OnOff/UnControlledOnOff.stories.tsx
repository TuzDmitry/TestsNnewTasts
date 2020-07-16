import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {UnControlledOnOff} from "./UnControlledOnOff";

export default {
    title: 'UnControlledOnOff',
    component: UnControlledOnOff,
};


const callbackAct=action("ON/OFF clicked")

export const OnMode = () =>  <UnControlledOnOff defaulValue={true} onChange={callbackAct}/>;
export const OffMode = () =>  <UnControlledOnOff defaulValue={false} onChange={callbackAct}/>;
export const BugMode = () => <div>Unsync when gnange defaulValue when already rendered</div>;


