import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Sidebar from "./components/SideBar";
import { BrowserRouter } from "react-router-dom";
import "../node_modules/font-awesome/css/font-awesome.min.css"

function App() {
    return (
        <>
           <BrowserRouter>
                <Header/>
                <Main/>
                <Footer/>
           </BrowserRouter>
        </>
    )
}

export default App;