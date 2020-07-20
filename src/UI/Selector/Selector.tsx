import React, {useEffect, useState} from "react";
import {RaitingValueType} from "../../App";
import s from "./Selector.module.css"

type ItemType = {
    title: string
    value: any
}


type SelectPropsType = {
    items: ItemType[]
    value?: any
    onChange: (value: any) => void
};


export function Selector(props: SelectPropsType) {

    // let [znach, changeZnach] = useState(props.value ? props.value : 1)

    let [hide, changeHide] = useState(true)
///стейт для подсветки
    let [hoveredElVal, changeHoweredElVal] = useState(props.value)


    let onElementClick = (value: number) => {
        changeHide(!hide)
        props.onChange(value)
    }


    let selectedOption = props.items.filter(el => el.value == props.value)
    debugger
    let howeredEl = props.items.find(el => el.value == hoveredElVal)

    useEffect(() => {
        changeHoweredElVal(props.value)
    }, [props.value])

    // const onKeyUp = (e: React.KeyboardEvent<HTMLDivElement>) => {
    //     debugger;
    //     if (e.key === 'ArrowDown' && props.value < props.items.length) {
    //         props.onChange(props.value + 1)
    //         // changeHoweredElVal(props.value+1)
    //     }
    //     if (e.key === 'ArrowUp' && props.value > 1) {
    //         props.onChange(props.value - 1)
    //         changeHide(false)
    //     }
    //     if (e.key === 'Enter' || 'Escape') {
    //         changeHide(true)
    //     }
    //
    // }

    const onKeyUp = (e: React.KeyboardEvent<HTMLDivElement>) => {
        debugger;
        if (e.key === 'ArrowDown'||e.key === 'ArrowUp' ) {
            for (let i = 0; i < props.items.length; i++) {

                if (props.items[i].value === hoveredElVal) {
                    const pretendentElement = e.key === 'ArrowDown'
                        ? props.items[i + 1]
                        : props.items[i - 1]

                    if (pretendentElement) {
                        props.onChange(pretendentElement.value)
                        return;
                    }
                }
            }
            if(selectedOption.length==0)props.onChange(props.items[0].value)
        }

        if (e.key === 'Enter'||e.key === 'Escape' ) {
            changeHide(true)
        }
    }

    return (
        <div className={s.re} tabIndex={0}
             onKeyUp={onKeyUp}>
            <h1 className={s.mainBlock}

                onClick={() => changeHide(!hide)}
                onBlur={() => {
                    changeHide(true)
                }}>
                {props.value === null ? "" : selectedOption[0].title}
            </h1>
            {!hide && <div className={s.mainBlock}>
                {props.items.map(el => {
                    // let c = el.value == hoveredElVal ? `${s.element} ${s.selecteditem}` : s.element
                    let c = el == howeredEl ? `${s.element} ${s.selecteditem}` : s.element

                    return <li className={`${c}`}
                               tabIndex={0}
                               value={el.value}
                               onMouseEnter={() => {
                                   changeHoweredElVal(el.value)
                               }}
                               onClick={() => {
                                   debugger;
                                   onElementClick(el.value)
                               }}
                    >{el.title}</li>
                })}


                {/*<li>1</li>*/}
                {/*<li>2</li>*/}
                {/*<li>3</li>*/}
            </div>}
        </div>
    )

}