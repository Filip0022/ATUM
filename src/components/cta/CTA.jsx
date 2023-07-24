import React from 'react'
import './cta.css';
import { LuPhone } from 'react-icons/lu';
import { BsAlarm } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';

const CTA = () => {
  return (
    <section id="contact">
        <h1>KONTAKT</h1>
      <header>
        <div>
          <BsAlarm className="icon"/>
          <h2>GODZINY PRACY</h2>
          <h5>Pracujemy w godzinach:</h5>
          <p>24h/7</p>
        </div>
        
        <div>
          <LuPhone className="icon"/>
          <h2>TELEFON</h2>
          <h5>Numer telefonu:</h5>
          <p>790 319 878</p>
        </div>

        <div>
          <FiMail className="icon"/>
          <h2>E-MAIL</h2>
          <h5>Napisz do nas:</h5>
          <p>RobieLache@gmail.com</p>
        </div>
      </header>

    </section>
  )
}

export default CTA