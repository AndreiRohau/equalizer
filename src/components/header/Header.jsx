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
      {/* <span>Калькулятор</span> */}
      <span><a href="http://localhost:3000/">Калькулятор</a></span>
      <span><a href="http://localhost:3000/content/topics">Тема</a></span>
      <span><a href="http://localhost:3000/content/price">Оплата</a></span>
      <img src="https://www.meme-arsenal.com/memes/4267c9547b52889572645f3688ae2d84.jpg" />
    </div>
  </header>
);

export default Header;
