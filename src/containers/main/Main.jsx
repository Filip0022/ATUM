import React from 'react'

import './Main.css';
import {Atum, Blog, Features, Footer, Header, Possibility} from "../index";
import {Brand, CTA} from "../../components";

const Main = () => {
    return (
        <div>
            <Header />
            <div id="app">
                <Atum />
                <Brand />
                <Features />
                <Possibility />
                <CTA />
                <Footer />
            </div>
        </div>
    )
}

export default Main