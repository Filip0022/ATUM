import React, {useState} from 'react'
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import './navbar.css';
import phone from '../../assets/phone.png';
import {Link} from "react-router-dom";

const ScrollTo = (id) => {
    setTimeout(function(){
        document.getElementById(id).scrollIntoView();
    }, 500);
}

const Menu = () => (
    <>
        <p><a href="#offer">Oferta</a></p>
        <p><Link onClick={() => ScrollTo('price')} to='/'>Cennik</Link></p>
        <p>
            <Link to="/gallery">Galeria zdjęć</Link>
        </p>
        <p><a href="#about">O nas</a></p>
        <p><a href="#contact">Kontakt</a></p>
    </>
)

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <section id="navbar">
            <header>
                <p>
                    <Link to={"/"}>
                        ATUM WYPOŻYCZALNIA NAMIOTÓW
                    </Link>
                </p>
                <aside>
                    <Menu/>
                </aside>
            </header>
            <article>
                <a href="tel:+48790319878">
                <img src={phone} alt="phone"/>
                <p>790 319 878</p>
                </a>
            </article>
            <main>
                {toggleMenu
                    ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)}/>
                    : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)}/>
                }
                {toggleMenu && (
                    <nav>
                        <div>
                            <Menu/>
                        </div>
                    </nav>
                )}
            </main>
        </section>
    );
};

export default Navbar