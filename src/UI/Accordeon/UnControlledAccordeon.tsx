import React, {useState} from "react"

type PropsType={
    titleValue:string
}


export function UnControlledAccordeon(props:PropsType) {

    let [collapsed, changeCollepsed]=useState(false)

    const toggledCollapse=()=>{
        changeCollepsed(!collapsed)
    }

    return (
        <>
            <AccordeonTitle titleValue={props.titleValue} onClick={toggledCollapse}/>
            {collapsed &&<AccordeonBody/>}
        </>
    )
}

type AccordeonTitleType={
    titleValue:string
    onClick:()=>void
}

function AccordeonTitle(props:AccordeonTitleType) {
    let {titleValue, ...restProps}=props

    return (
        // <h1 onClick={()=>{props.onClick()}}>{props.titleValue}</h1>
        <h1 {...restProps}>{props.titleValue}</h1>
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