import React from "react";
import "./footer.scss";
import logo from "../../assets/LOGO.jpg";

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer__main">
        <div className="footer__main__row">
          <div className="footer__main__row__column">
            <img
              src={logo}
              alt="logo"
              className="footer__main__row__column__img"
            />
            <h3 className="footer__main__row__column__title">
              ESTUDIO REPTA, CAPITAL FEDERAL
            </h3>
            <div className="footer__main__row__column__flexContainer">
              <p className="footer__main__row__column__flexContainer__contactanos">
                <strong>Contactanos</strong>
              </p>
              <p className="footer__main__row__column__flexContainer__data">
                +54 9 11123123
              </p>
              <p className="footer__main__row__column__flexContainer__data">
                repta@mail.com
              </p>
            </div>
          </div>
          <div className="footer__main__row__block">
            <div className="footer__main__row__block__col1">
              <h4>Información</h4>
              <ul>
                <li>Inicio</li>
                <li>Contacto</li>
                <li>Suscribirse</li>
              </ul>
            </div>
            <div className="footer__main__row__block__col2">
              <h4>Estudio</h4>
              <ul>
                <li>Equipo</li>
                <li>Espacio</li>
                <li>Reservas</li>
              </ul>
            </div>
            <div className="footer__main__row__block__col3">
              <h4>Nuestras Redes</h4>
              <ul>
                <li>Instagram</li>
                <li>Facebook</li>
                <li>WhatsApp</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__lower">
        <div className="footer__lower__container">
          <ul className="footer__lower__container__mainlist">
            <li>Repta</li>
            <li>Buenos Aires, Argentina</li>
            <li>2022</li>
            <li>
              <ul className="footer__lower__container__mainlist__sec">
                <li>FB</li>
                <li>IG</li>
                <li>WP</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
