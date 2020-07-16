import React from "react";

type OnOffPropsType = {
    on:boolean
    setOn:(on:boolean)=>void
}

export function OnOff(props: OnOffPropsType) {

   let {on, setOn}=props


    let buttonStyleG = {
        backgroundColor: on ? "green" : "white"
    }
    let buttonStyleR = {
        backgroundColor: on ? "white" : "red"
    }

    let cycleStyle = {
        marginLeft: 15,
        width: 20,
        height: 20,
        borderRadius: '50%',
        border: '2px solid',
        backgroundColor: on ? "green" : "red"
    }

    return (
        <div style={{display: "flex"}}>
            < button style={buttonStyleG} onClick={()=>setOn(true)}>On</button>
            < button style={buttonStyleR} onClick={()=>setOn(false)}>Off</button>
            <div style={cycleStyle}></div>
        </div>
    )
}
