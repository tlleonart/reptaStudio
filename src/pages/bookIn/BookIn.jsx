import React from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./bookin.scss";

const BookIn = () => {
  return (
    <div className="bookin">
      <Header />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default BookIn;
