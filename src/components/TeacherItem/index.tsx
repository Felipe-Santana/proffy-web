import React from "react";
import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://icons.iconseeker.com/png/fullsize/harry-potter-1/harrypotter4.png"
          alt="Alvo Dumbledore"
        />
        <div>
          <strong>Alvo Dumbledore</strong>
          <span>Feitiços</span>
        </div>
      </header>

      <p>
        Alvo Dumbledore jamais demonstrava orgulho ou vaidade, sempre encontrava
        o que elogiar em qualquer pessoa, por mais insignificante ou miserável
        que fosse, e acredito que as perdas que sofreu na juventude o dotaram de
        grande humildade e solidariedade.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 5000,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
