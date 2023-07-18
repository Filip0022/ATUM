import React from 'react'
import './atum.css';
import Tent from '../../assets/Tents.png';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { BsCalendarEvent } from 'react-icons/bs';

  const Atum = () => {
  return (
    <section id="about">
      <header>
        <h4>Zapoznaj się z</h4>
        <h1>ATUM</h1>
      </header>
      <main>
        <aside>
          <img src={Tent} alt="tent"/>
        </aside>
        <section>
          <div>
            <article>
              <FaAward/>
              <h5>Doświadczenie</h5>
              <small>7+ Lat na rynku</small>
            </article>

            <article>
              <FiUsers />
              <h5>Klienci</h5>
              <small>1000+ Zadowolonych klientów</small>
            </article>

            <article>
              <BsCalendarEvent />
              <h5>Wydarzenia</h5>
              <small>100+ Imprez masowych</small>
            </article>
          </div>
          <p>
            Oferujemy solidne wyposażenie dodatkowe do naszych namiotów, takie jak stoły, krzesła, oświetlenie LED, podłogi, lustra i wieszaki. Nasze produkty są wysokiej jakości i zapewniają wygodę oraz elegancki wygląd wnętrza. 
            <br/><br/>
            Bez względu na rodzaj uroczystości, nasze wyposażenie doskonale spełni potrzeby i zapewni udane wydarzenie.          
          </p>
        </section>  
      </main>
    </section>
  )
}

export default Atum