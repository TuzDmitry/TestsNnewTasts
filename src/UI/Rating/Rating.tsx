import React from "react";
import { RaitingValueType } from "../../App";

type RaitingPropsType = {
    value: number
    onClick:(value:RaitingValueType)=>void
};

export function Rating(props:RaitingPropsType) {
    let {value, onClick}=props
    return(
        <div>
            <Star selected={value>0} id={1} onClick={onClick}/>
            <Star selected={value>1} id={2} onClick={onClick}/>
            <Star selected={value>2} id={3} onClick={onClick}/>
            <Star selected={value>3} id={4} onClick={onClick}/>
            <Star selected={value>4} id={5} onClick={onClick}/>
        </div>
    )

}

type StarPropsType={
    selected:boolean
    id:RaitingValueType
    onClick:(id:RaitingValueType)=>void
}

function Star(props:StarPropsType) {
    debugger
    let a=props;
    return(
        <span onClick={()=>props.onClick(props.id)}>
            {props.selected?<b> star </b>:' star '}
        </span>
    )
}