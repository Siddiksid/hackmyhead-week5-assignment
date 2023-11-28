"use client"
import { useState } from "react"

export default function ToggleBox(){
 const [boxColor, setBoxColor] = useState("whiteBox")

 function handleClick(){
    if(boxColor==="whiteBox"){
        setBoxColor("blueBox");

    } else {
        setBoxColor("whiteBox");

    }
 }

    return (
        <div>
            <hr />
            <h1>Toggle the Box</h1>
            <div onClick={handleClick} className={boxColor}>
            </div>
            <hr />
        </div>
    )
}