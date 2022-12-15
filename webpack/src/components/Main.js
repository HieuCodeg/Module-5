import React from "react";
import Register from "./UseState/Register";

const handleShowPass = () => {
    if (document.getElementById('inputPassWord').type == 'password') {
        document.getElementById('inputPassWord').type = 'text'
    } else {
        document.getElementById('inputPassWord').type = 'password'
    }
   
}

function Main(){
    return (
        <div className="container vh-100">
        <Register></Register>
        </div>
    )
}

export default Main;