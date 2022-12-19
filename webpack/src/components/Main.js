import React, { useState } from "react";
import Blog from "./UseEffect/Blog";
import ContactApp from "./UseState/ContactApp";
import LotteryApp from "./UseState/LotteryApp";
import Register from "./UseState/Register";
import Test from "./UseEffect/Test";

const handleShowPass = () => {
    if (document.getElementById('inputPassWord').type == 'password') {
        document.getElementById('inputPassWord').type = 'text'
    } else {
        document.getElementById('inputPassWord').type = 'password'
    }
   
}

function Main(){
    const [state, setState] = useState(false);
    const handleClick = () => {
        setState(!state)
    }

    return (
        <div className="container">
        <Register></Register>
        {/* <Test></Test> */}
        {/* <ContactApp></ContactApp> */}
        {/* <LotteryApp></LotteryApp> */}
        {/* <button
            className="btn btn-dark mb-2"
            onClick={handleClick}
        >Toggle</button>
        {
            state && <Blog></Blog>
        } */}
        </div>
    )
}

export default Main;