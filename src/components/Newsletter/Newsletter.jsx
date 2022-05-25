import React from "react";
import "./newsletter.scss";
import { BsMailbox } from "react-icons/bs";

const Newsletter = () => {
  return (
    <section className="newsletter">
      <div className="newsletter__container">
        <div className="newsletter__container__row">
          <div className="newsletter__container__row__left">
            <div className="newsletter__container__row__left__cont">
              <BsMailbox size={50} />{" "}
              <h3 className="newsletter__container__row__left__cont__h3">
                Suscribite a nuestro Newsletter!
              </h3>
            </div>
            <p>
              Mantenete al tanto de nuestras promociones, novedades y los
              eventos del estudio!
            </p>
          </div>
          <div className="newsletter__cotainer__row__right">
            <form className="newsletter__container__row__right__form">
              <input
                type="text"
                placeholder="Tu nombre..."
                className="newsletter__container__row__right__form__input__name"
              />
              <input
                type="text"
                placeholder="Tu correo electrónico..."
                className="newsletter__container__row__right__form__input__email"
              />
              <button className="newsletter__container__row__right__form__btn">
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
