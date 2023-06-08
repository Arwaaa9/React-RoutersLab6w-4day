import React from 'react'
import ReactDOM from 'react-dom/client' 
// eslint-disable-next-line no-unused-vars
import { BrowserRouter, Routes, Route , Link} from "react-router-dom";

import About from "./component/About";
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
    <About>
    </About>
    <App />
  
    </BrowserRouter>
  </React.StrictMode>,

)
