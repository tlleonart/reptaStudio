import React from "react";
import "./header.scss";
import logo from "../../assets/LOGO.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="logo" className="header__logo" />
      <ul className="header__ul">
        <Link to="/">
          <li>Home</li>
        </Link>
        <li>Equipos</li>
        <Link to="/book">
          <li>Contacto</li>
        </Link>
        <Link to="/book">
          <button className="header__ul__btn">Reserva!</button>
        </Link>
      </ul>
    </header>
  );
};

export default Header;
