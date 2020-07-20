import React from "react"


type ItemType={
    title:string
    value:any
}

type AccordeonType={
    titleValue:string
    collapsed?:boolean
    changeCollepsed:()=>void
    items:ItemType[]
    onClick:(val:any)=>void
}


export function Accordeon(props:AccordeonType) {
    return (
        <>
            <AccordeonTitle changeCollepsed={props.changeCollepsed} titleValue={props.titleValue}/>
            {!props.collapsed &&<AccordeonBody items={props.items} onClick={props.onClick}/>}
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

type AccordeonBodyType={
    onClick:(val:any)=>void
    items:ItemType[]
}

const AccordeonBody = (props:AccordeonBodyType) => {
    return (
        <ul>
            {props.items.map((el,i)=><li onClick={()=>{props.onClick(el.value)}} key={i}>{el.title}</li>)}
        </ul>
    )
}