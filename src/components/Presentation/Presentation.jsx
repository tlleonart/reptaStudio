import React from "react";
import { Link } from "react-router-dom";
import "./presentation.scss";

const Presentation = () => {
  return (
    <div className="presentation">
      <h1 className="presentation__title">Repta estudio fotográfico</h1>
      <h3 className="presentation__aclaration">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s,
      </h3>
      <Link to="/book">
        <button className="presentation__btn">Contactanos Ahora!</button>
      </Link>
    </div>
  );
};

export default Presentation;
