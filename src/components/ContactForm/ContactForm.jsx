import React from "react";
import "./contactform.scss";

const ContactForm = () => {
  return (
    <section className="contactform">
      <div className="contactform__container">
        <div className="contactform__container__text">
          <h3 className="contactform__container__text__title">
            Contactate con REPTA
          </h3>
          <p className="contactform__container__text__p1">
            Comunicate con nosotros para conocer la disponibilidad del estudio y
            recibir un presupuesto.
          </p>
          <p className="contactform__container__text__p2">
            Tambien podés llamarnos por teléfono al +541112356
          </p>
        </div>
        <form className="contactform__container__form">
          <input
            className="contactform__container__form__input__name"
            type="text"
            placeholder="Tu nombre"
          />
          <input
            className="contactform__container__form__input__mail"
            type="text"
            placeholder="Tu correo electrónico"
          />
          <input
            className="contactform__container__form__input__date"
            type="date"
          />
          <input
            className="contactform__container__form__input__textbox"
            type="textbox"
            placeholder="Escribinos tu consulta"
          />
          <button className="contactform__container__form__input__btn">
            Enviar Consulta
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
