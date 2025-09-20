import React from "react"
import ReactDom from "react-dom/client"
import App      from "./App.jsx"
import "@fortawesome/fontawesome-free/css/all.min.css";

ReactDom.createRoot(document.getElementById('root')).render(

    <React.StrictMode>
        <App />
    </React.StrictMode>
)