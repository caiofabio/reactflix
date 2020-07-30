import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/img/alurav2.png'
//<img src="https://www.alura.com.br/assets/img/imersoes/aula/logo-alura-header.1595847989.svg" alt="Logo Alura" />
function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        
        <img className="Logo" src={Logo} alt="PIKACHU logo"></img>
      </a>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
