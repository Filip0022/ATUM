import React from 'react'
import './brand.css';
import { GiBarracksTent } from 'react-icons/gi';
import { TbTruckDelivery } from 'react-icons/tb';

const Brand = () => {
  return (
    <section id="offer">
      <header>
        <h1>OFERUJEMY</h1>
        <nav>
          <article>
            <GiBarracksTent className="icon" />
            <h3>NAMIOTY O NAJWYŻSZEJ JAKOŚCI SPOŚRÓD WSZYSTKICH DOSTĘPNYCH NA RYNKU</h3>
            <p>
            Namioty o najwyższej jakości są wyborem nie tylko dla profesjonalnych imprez i wydarzeń, ale także dla niezapomnianych komunii i wesel. Zapewniają one nie tylko imponujący wygląd, ale również stwarzają magiczną atmosferę, idealną dla tych wyjątkowych uroczystości. Dzięki solidnym konstrukcjom i starannemu wykonaniu, namioty eventowe gwarantują niezawodność nawet podczas zmiennej pogody, zapewniając bezpieczne przestrzenie dla gości.
            </p>
          </article>

          <article>
            <TbTruckDelivery className="icon" />
            <h3>PUNKTUALNA DOSTAWA I PROFESJONALNY MONTAŻ - ZAPEWNIAMY NIEZAWODNOŚĆ!</h3>
            <p>
            Gwarantujemy punktualną dostawę i profesjonalny montaż, aby spełnić oczekiwania naszych klientów. Działamy z precyzją i dokładnością, aby zapewnić, że każde zamówienie jest dostarczane na czas i instalowane z najwyższym poziomem fachowości. Nasze zobowiązanie do niezawodności i satysfakcji klienta sprawia, że możesz mieć pewność, że dostawa i montaż zostaną przeprowadzone zgodnie z ustalonym harmonogramem i najwyższymi standardami jakości.
            </p>
          </article>

          <article>
            <GiBarracksTent className="icon" />
            <h3>BOGATY WYBÓR WYPOSAŻENIA DODATKOWEGO W NASZEJ OFERCIE!</h3>
            <p>
            Oferujemy klientom nie tylko bogaty wybór solidnych i funkcjonalnych dodatków do namiotów, takich jak różnego rodzaju stoły, wygodne krzesła, nowoczesne oświetlenie LED, trwałe podłogi, eleganckie lustra i praktyczne wieszaki, lecz także zapewnia im całkowite zaufanie w wysokiej jakości tych produktów oraz możliwość pełnego dopasowania ich do indywidualnych potrzeb każdej uroczystości, aby stworzyć komfortowe wnętrza, w których mile spędzą czas ich goście.
            </p>
          </article>
        </nav>
      </header>
    </section>
  )
}

export default Brand