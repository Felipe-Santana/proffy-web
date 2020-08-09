import React from "react";

import "./styles.css";
import PageHeader from "../../components/PageHeader";
import Input from "../../components/Input";
import Textarea from "../../components/Textarea";

import warningIcon from "../../assets/images/icons/warning.svg";
import Select from "../../components/Select";

import { subjects } from "../../utils/selectData";

function TeacherForm() {
  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Que incrível que você quer dar aulas."
        description="O primeiro passo é preencher esse formulaŕio de inscrição"
      />

      <main>
        <fieldset>
          <legend>Seus dados</legend>
          <Input label="Nome Completo" name="name" />
          <Input label="Avatar" name="avatar" />
          <Input label="WhatsApp" name="whatsapp" />
          <Textarea label="Biografia" name="bio" />
        </fieldset>
        <fieldset>
          <legend>Sobre a aula</legend>
          <Select label="Matéria" name="subject" options={subjects} />
          <Input label="Custo da sua hora por aula" name="cost" />
        </fieldset>

        <footer>
          <p>
            <img src={warningIcon} alt="Aviso importante" />
            Importante! <br />
            Preencha todos os dados
          </p>
          <button type="button">Salvar cadastro</button>
        </footer>
      </main>
    </div>
  );
}

export default TeacherForm;
