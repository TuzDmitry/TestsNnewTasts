import React from "react"

type AccordeonType={
    titleValue:string
    collapsed?:boolean
    changeCollepsed:()=>void
}


export function Accordeon(props:AccordeonType) {
    return (
        <>
            <AccordeonTitle changeCollepsed={props.changeCollepsed} titleValue={props.titleValue}/>
            {!props.collapsed &&<AccordeonBody/>}
        </>
    )
}

type AccordeonTitlePropsType={
    titleValue:string
    changeCollepsed:()=>void
}

function AccordeonTitle(props:AccordeonTitlePropsType) {
    return (
        <h1 onClick={props.changeCollepsed}>{props.titleValue}</h1>
    )
}

const AccordeonBody = () => {
    return (
        <div>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </div>
    )
}