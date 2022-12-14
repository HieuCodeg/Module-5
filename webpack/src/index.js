import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';

// Render component App vào #root element
const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<App />)


