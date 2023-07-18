import React from 'react'
import './brand.css';
import { GiBarracksTent } from 'react-icons/gi';
import { TbTruckDelivery } from 'react-icons/tb';

const Brand = () => {
  return (
    <section id="oferta">
    <div className="atum__brand-container">
      <div className="atum__brand-title">
        <h1>OFERUJEMY</h1>
      </div>
      <div className="atum__brand-cards">
        <div className="atum__brand-card">
          <GiBarracksTent className="atum__brand-card_icon" />
          <h3>NAMIOTY O NAJWYŻSZEJ JAKOŚCI SPOŚRÓD WSZYSTKICH DOSTĘPNYCH NA RYNKU</h3>
          <p>
          Namioty o najwyższej jakości są wyborem nie tylko dla profesjonalnych imprez i wydarzeń, ale także dla niezapomnianych komunii i wesel. Zapewniają one nie tylko imponujący wygląd, ale również stwarzają magiczną atmosferę, idealną dla tych wyjątkowych uroczystości. Dzięki solidnym konstrukcjom i starannemu wykonaniu, namioty eventowe gwarantują niezawodność nawet podczas zmiennej pogody, zapewniając bezpieczne przestrzenie dla gości.
          </p>
        </div>

        <div className="atum__brand-card">
          <TbTruckDelivery className="atum__brand-card_icon" />
          <h3>PUNKTUALNA DOSTAWA I PROFESJONALNY MONTAŻ - ZAPEWNIAMY NIEZAWODNOŚĆ!</h3>
          <p>
          Nasza firma gwarantuje punktualną dostawę i profesjonalny montaż, aby spełnić oczekiwania naszych klientów. Działamy z precyzją i dokładnością, aby zapewnić, że każde zamówienie jest dostarczane na czas i instalowane z najwyższym poziomem fachowości. Nasze zobowiązanie do niezawodności i satysfakcji klienta sprawia, że możesz mieć pewność, że dostawa i montaż zostaną przeprowadzone zgodnie z ustalonym harmonogramem i najwyższymi standardami jakości.
          </p>
        </div>

        <div className="atum__brand-card">
          <GiBarracksTent className="atum__brand-card_icon" />
          <h3>BOGATY WYBÓR WYPOSAŻENIA DODATKOWEGO W NASZEJ OFERCIE!</h3>
          <p>
          Oferujemy solidne wyposażenie dodatkowe do naszych namiotów. Nasza oferta obejmuje stoły, krzesła, oświetlenie LED, podłogi, lustra i wieszaki, które tworzą eleganckie i wygodne wnętrza. Zapewniamy wysoką jakość i dopasowanie do potrzeb każdej uroczystości.
          </p>
        </div>
    </div>
      </div>
    </section>
  )
}

export default Brand