/* eslint-disable linebreak-style */
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/pikachu-flix.png';
import './Menu.css';
import Button from '../Button';
// import ButtonLink from './components/ButtonLink/index'

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="PIKACHU logo" />
      </Link>
      <Button as={Link} className="ButtonLink" to="cadastro/video">
        Novo Vídeo
      </Button>

    </nav>
  );
}

export default Menu;
