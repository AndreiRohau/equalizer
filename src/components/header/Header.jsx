import React from 'react';
import Logo from './logo.png';
import './Header.css';
const Header = () => (
  <header>
    <div className="logo">
      <div>
        <img src={Logo} />
      </div>
      <span>Великий Уравнитель</span>
    </div>
    <div className="rest">
      <span>Калькулятор</span>
      <span>Тема</span>
      <span>Оплата</span>
      <img src="https://www.meme-arsenal.com/memes/4267c9547b52889572645f3688ae2d84.jpg" />
    </div>
  </header>
);

export default Header;
