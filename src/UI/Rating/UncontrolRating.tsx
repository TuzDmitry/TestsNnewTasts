import React, {useState} from "react";
import {RaitingValueType} from "../../App";


type UnControledRatingPropsType={
    defaultValue?:RaitingValueType
    onChange:(val:RaitingValueType)=>void
}


export function UnControledRating(props:UnControledRatingPropsType) {

    let [selected, Sedselected]=useState(props.defaultValue?props.defaultValue:0)


    return(
        <div>
            <Star setValue={()=>{Sedselected(2); props.onChange(2);}} selected={selected>1} />
            <Star setValue={()=>{Sedselected(3); props.onChange(3);}} selected={selected>2} />
            <Star setValue={()=>{Sedselected(4); props.onChange(4);}} selected={selected>3} />
            <Star setValue={()=>{Sedselected(5); props.onChange(5);}} selected={selected>4} />
        </div>
    )

}

type StarPropsType= {
    setValue: () => void
    selected: boolean
    // onChange:(val:RaitingValueType)=>void
}

function Star(props:StarPropsType) {
    return(
        <span onClick={()=>{props.setValue()}}>
            {props.selected?<b> star </b>:' star '}
        </span>
    )
}