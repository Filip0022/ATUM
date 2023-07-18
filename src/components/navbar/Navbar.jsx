import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import phone from '../../assets/phone.png';


const Menu = () => (
  <>
  <p><a href="#oferta">Oferta</a></p>
  <p><a href="#cennik">Cennik</a></p>
  <p><a href="#galeria">Galeria zdjęć</a></p>
  <p><a href="#oNas">O nas</a></p>
  <p><a href="#kontakt">Kontakt</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="atum__navbar">
      <div className="atum__navbar-links">
        <div className="atum__navbar-links_logo">
          <p>MIEJSCE NA LOGO ATUM</p>
        </div>
        <div className="atum__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="atum__navbar-number">
        <img src={phone} alt="phone" />
        <p>790 319 878</p>
      </div>
      <div className="atum__navbar-menu">
        {toggleMenu 
          ? <RiCloseLine color="#fff" size={27}  onClick={() => setToggleMenu(false)} /> 
          : <RiMenu3Line color="#fff" size={27}  onClick={() => setToggleMenu(true)} />}
      {toggleMenu && (
        <div className="atum__navbar-menu_container scale-up-center">
          <div className="atum__navbar-menu_container-links">
            <Menu />
          </div>
        </div>
      )}
        
      </div>
    </div>
  );
};

export default Navbar