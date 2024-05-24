import React from 'react';
import Logo from '../../assets/logo.svg';
import { FaUser } from 'react-icons/fa';

const Header = () => {
  return (
    <div className='container'>
      <div color='blue'>
        <img src={Logo} width={100}/>
      </div>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Sobre Mim</a></li>
        <li><a href="#">Tecnologias</a></li>
        <li><a href="#">Projetos</a></li>
        <li><a href="#">Contato</a></li>
      </ul>
    </div>
  )
}

export default Header;