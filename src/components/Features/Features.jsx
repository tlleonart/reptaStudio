import React from "react";
import "./features.scss";
import { FaRegBuilding } from "react-icons/fa";
import { GrMapLocation, GrWorkshop } from "react-icons/gr";
import { Link } from "react-router-dom";
const Features = () => {
  return (
    <section className="features">
      <div className="features__container">
        <h3>¿Por qué Repta?</h3>
        <div className="features__container__data">
          <div className="features__container__data__card">
            <div className="ricon">
              <FaRegBuilding className="ricon" />
            </div>
            <h4>Nuestro Espacio</h4>
            <p>
              Contamos con no sé cuantos metros cuadrados, con camarín y cocina
              a disposición.
            </p>
          </div>
          <div className="features__container__data__card">
            <div className="ricon">
              <GrMapLocation className="ricon" />
            </div>
            <h4>Nuestra Ubicación</h4>
            <p>
              Repta está ubicado en el corazón de la Ciudad de Buenos Aires, a
              metros de la Avenida Corrientes.
            </p>
          </div>
          <div className="features__container__data__card">
            <div className="ricon">
              <GrWorkshop className="ricon" />
            </div>
            <h4>Nuestros Obsesión</h4>
            <p>
              Nuestra experiencia y nuestro conocimiento nos permite ayudarte a
              optimizar tu inversión.
            </p>
          </div>
        </div>
        <button className="features__container__btn">
          <Link to="/book">Reservá Ahora!</Link>
        </button>
      </div>
    </section>
  );
};

export default Features;
