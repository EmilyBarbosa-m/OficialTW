import '../Header/Header.css';
import React from 'react';


function Header() {
    return (
        <header id="topo-home">

            <nav className="menu-home">
                <a href="#" />
                <img className="imagem_logo_home" src={require('../../assets/img/logoarte.png')} alt="logo do site square events" />
                <h1 id="hlogo">SquareEvents Home</h1>


                <ul id="ul-home">
                    <li id="li-home"><a className="home-as m-5" href="#">Home</a></li>
                    <li id="li-home"><a className="home-a m-s" href="#">Login</a></li>
                    <li id="li-home"><a className="home-as m-5" href="#">Crie Seu Evento</a></li>
                </ul>
            </nav>
        </header>
    )
}
export default Header;
