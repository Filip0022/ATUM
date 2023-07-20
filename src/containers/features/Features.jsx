import React from 'react'
import './features.css';
import Zetka from '../../assets/Zetka.jpeg'
import Polsat from '../../assets/Polsat.png'
import Uniejow from '../../assets/uniejow.jpeg'
import Winobranie from '../../assets/winobranie.jpeg'
import Jarocin from '../../assets/jarocin.jpeg'

  const Features = () => {
    return (
      <section id="belived">
        <h1>ZAUFALI NAM</h1>
        <header>
          <img src={Uniejow} alt="uniejow"/>
          <img src={Polsat} alt="polsat"/>
          <img src={Zetka} alt="zetka"/>
          <img src={Winobranie} alt="winobranie"/>
          <img src={Jarocin} alt="jarocin"/>
        </header>
      </section>
    )
  }

  export default Features