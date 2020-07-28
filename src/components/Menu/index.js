import React from 'react'
import Logo from '../../assets/img/pikachu-flix.png'
import './Menu.css'
import Button from '../Button'
//import ButtonLink from './components/ButtonLink/index'

function Menu() {
    return (   
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="PIKACHU logo"></img>
            </a>
            <Button as="a" className="ButtonLink" href="/">
                Novo Vídeo
            </Button >

        </nav>
    );
}

export default Menu;