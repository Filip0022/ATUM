import React from 'react'
import {Navbar} from './components';
import './App.css';
import Main from "./containers/main/Main";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Gallery from "./containers/gallery/Gallery";

const App = () => {
    return (
        <BrowserRouter>
            <div className="gradient__bg">
                <Navbar/>
            </div>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/gallery" element={<Gallery/>}/>
            </Routes>
        </BrowserRouter>

    )
}

export default App