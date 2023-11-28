"use client"

import { useState } from "react"

export default function Mirror(){

    const [words, setWords] = useState("")

    function handleChange(e){
        setWords(e.target.value)
    }


    return (
        <div>
            <h1>Mirror</h1>
            <input type="text" 
                value={words}
                onChange={handleChange}
            />
            <p>{words}</p>
            <hr />
        </div>
    )
}