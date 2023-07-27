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
                <Features />
                <Possibility />
                <Brand />
                <CTA />
                <Footer />
            </div>
        </div>
    )
}

export default Main