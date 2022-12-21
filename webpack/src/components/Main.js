import React, { useState } from "react";
import Blog from "./UseEffect/Blog";
import ContactApp from "./UseState/ContactApp";
import LotteryApp from "./UseState/LotteryApp";
import Register from "./UseState/Register";
import Test from "./UseEffect/Test";
import { Route, Routes } from "react-router-dom";
import Album from "./Post/Album";
import Photo from "./Post/Photo";


function Main(){

    return (
        <div className="container">
        
        {/* <Test></Test> */}
      
        <Routes>
            <Route path="/aa" element= {<Register></Register>} />
            <Route path="/" element= {<Album></Album>} />
            <Route path="/album/:albumId" element= {<Photo></Photo>} />
            <Route path="/lottery" element= {<LotteryApp></LotteryApp>} />
            <Route path="/contact" element= {<ContactApp></ContactApp>} />
            <Route path="/blog" element= {<Blog></Blog>} />
           
        </Routes>
        </div>
    )
}

export default Main;