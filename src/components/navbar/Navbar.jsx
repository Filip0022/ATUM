import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import phone from '../../assets/phone.png';


const Menu = () => (
  <>
  <p><a href="#offer">Oferta</a></p>
  <p><a href="#price">Cennik</a></p>
  <p><a href="#galeria">Galeria zdjęć</a></p>
  <p><a href="#about">O nas</a></p>
  <p><a href="#kontakt">Kontakt</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <section id="navbar">
      <header>
          <p>
            MIEJSCE NA LOGO ATUM
          </p>
        <aside>
          <Menu />
        </aside>
      </header>
      <article>
        <img src={phone} alt="phone" />
        <p>790 319 878</p>
      </article>
      <main>
          {toggleMenu 
            ? <RiCloseLine color="#fff" size={27}  onClick={() => setToggleMenu(false)} /> 
            : <RiMenu3Line color="#fff" size={27}  onClick={() => setToggleMenu(true)} />
            }
        {toggleMenu && (
          <nav>
            <div>
              <Menu />
            </div>
          </nav>
        )}
      </main>
    </section>
  );
};

export default Navbar