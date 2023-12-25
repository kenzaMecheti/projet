import React, { useState } from "react";
import "../Acceuil.css";

function Acceuil() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };

  return (
    <div className="page-accueil">
      <nav className="nav">
        <a href="#" className="brand">
          <img src="logo.png" alt="Unicom Logo" className="logo" />
          Unicom
        </a>
        <ul className={active}>
          <li className="nav__item">
            <a href="#" className="nav__link">
              Obtenir de l'aide
            </a>
          </li>

          <li className="nav__item">
            <a href="#" className="nav__link">
              About us
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              Créer un compte
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              Connexion
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="link">
              Télécharger
            </a>
          </li>
        </ul>
        <div onClick={navToggle} className={icon}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>

      <div className="container-first">
        <h1>Work Anywhere</h1>
        <h2>join us now and don't waste time</h2>
        <div className="icons-container">
          <img
            src="logo-windows.png"
            alt="Windows Logo"
            className="icons-container__icon"
          />
          <img
            src="logo-apple.png"
            alt="Apple Logo"
            className="icons-container__icon"
          />
          <img
            src="linux.png"
            alt="Linux Logo"
            className="icons-container__icon"
          />
        </div>
      </div>
    </div>
  );
}

export default Acceuil;
