import React, {ChangeEvent, useRef, useState, SetStateAction, FormEvent} from 'react';

export default {
    title: 'Input',
};

export const UnControlledInput = () => <input type="text"/>;


export const TrackUnControlledInput = () => {
    let [val, changeVal] = useState("")

    let chan = (e: ChangeEvent<HTMLInputElement>) => {
        changeVal(e.currentTarget.value)
    }

    return <><input type="text" onChange={chan}/>{val} </>;
}


export const GetValueOfUnControlledInputByPressButton = () => {
    let [val, changeVal] = useState("")
    const inputRef = useRef<HTMLInputElement>(null);
    return <>
        <input type="text" ref={inputRef}/>
        <button onClick={() => {
            const el = inputRef.current as HTMLInputElement;
            changeVal(el.value)
        }}>Press
        </button>
        {val}</>;
}


export const ControlledInput = () => {
    let [val, changeVal] = useState("")

    return <><input value={val} onChange={(e: ChangeEvent<HTMLInputElement>) => {
        changeVal(e.currentTarget.value);
        console.log(e.currentTarget.value)
    }}/>
        {/*{val}*/}
    </>;
}

export const ControlledCheckBox = () => {
    let [val, changeVal] = useState(false)

    return <><input type='checkbox' checked={val} onChange={(e: ChangeEvent<HTMLInputElement>) => {
        changeVal(e.currentTarget.checked);
    }}/>
        {val.toString()}
    </>;
}

export const ControlledSelect = () => {
    let [val, changeVal] = useState("2")

    return <select name="1" id="1" value={val} onChange={(e: ChangeEvent<HTMLSelectElement>) => {
        changeVal(e.currentTarget.value)
    }}>
        <option value="1">Minsk</option>
        <option value="2">Kiyv</option>
        <option value="3">Moskow</option>
    </select>
}

export const ControlledSelectWithOutVal = () => {
    let [val, changeVal] = useState("")

    return <select name="1" id="1" value={val} onChange={(e: ChangeEvent<HTMLSelectElement>) => {
        changeVal(e.currentTarget.value)
    }}>
        <option value="1">Minsk</option>
        <option value="2">Kiyv</option>
        <option value="3">Moskow</option>
    </select>
}


