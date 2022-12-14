import React from "react";  // import thư viện react
import ReactDOM from "react-dom/client"; // import thư viện react-dom/client

// Tạo component App
function App() {
  return (
    <div>
      <h1>Hello World!</h1>
    </div>
  );
}

// Render component App vào "root"
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);