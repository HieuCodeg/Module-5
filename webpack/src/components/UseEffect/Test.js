import React, { useState, useEffect } from "react";

function Test() {
    const [state, setState] = useState("");

    useEffect(() => {
        console.log("đã chạy")
    }, [state])
    
    const handleClick = (e) => {
        setState(e.target.value)
    }
    return (
        <input type="text" 
            name="state"
            value={state}
            onInput= {handleClick}
        />

    )
}

export default Test;