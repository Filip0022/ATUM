import React from 'react'
import Background from '../src/assets/background.jpg';
import { Footer, Blog, Possibility, Features, Atum, Header } from './containers';
import { CTA, Brand, Navbar } from './components';
import './App.css';

const App = () => {
  return (
    <div>
      <div className="gradient__bg">
        <Navbar />
      </div>
      <Header />
      <div id="app">
        <Atum />
        <Brand />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
      </div>
    </div>
  )
}

export default App