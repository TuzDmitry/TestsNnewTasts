import React, {useState} from "react";

type OnOffPropsType = {
    defaulValue?: boolean
    onChange: (val: boolean) => void
}

export function UnControlledOnOff(props: OnOffPropsType) {

    let [on, setOn] = useState(props.defaulValue ? props.defaulValue : false)


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


    const press = (val:boolean) => {
        setOn(val)
        props.onChange(val)
    }

    return (
        <div style={{display: "flex"}}>
            < button style={buttonStyleG} onClick={()=>press(true)}>On</button>
            < button style={buttonStyleR} onClick={()=>press(false)}>Off</button>
            <div style={cycleStyle}></div>
        </div>
    )
}
