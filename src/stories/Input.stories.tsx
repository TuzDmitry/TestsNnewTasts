import React, {ChangeEvent, useRef, useState, SetStateAction} from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';

export default {
  title: 'Input',
};

export const UnControlledInput = () => <input type="text"/>;


export const TrackUnControlledInput = () => {
let [val, changeVal]=useState("")

    let chan=(e:ChangeEvent<HTMLInputElement>)=>{
        changeVal(e.currentTarget.value)
    }

    return <><input type="text" onChange={chan}/>{val} </>;
}


export const GetValueOfUnControlledInputByPressButton = () => {
    let [val, changeVal]=useState("")

const inputRef=useRef<HTMLInputElement>(null);



    return <>
        <input type="text"  ref={inputRef}/>
        <button onClick={()=>{
            const el=inputRef.current as HTMLInputElement;
            changeVal(el.value)
        }}>
            Press</button>{val}
        </>;
}




export const ControlledInput = () => <input value="text"/>;

