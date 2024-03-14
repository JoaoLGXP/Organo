/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { useState } from "react";
import Button from "../Button";
import ListField from "../ListField";
import TextField from "../TextField";
import "./OrganoForm.css";

const OrganoForm = (props) => {

  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [image, setImage] = useState("");
  

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleRegisteredHero({
      name,
      image,
      role
    });
    setName("");
    setImage("");
    setRole("");
  };

  return (
    <section className="organo-form">
      <form onSubmit={handleSubmit}>
        <h2>Preencha os dados para criar o card do herói.</h2>
        <TextField
          required={true}
          label="Nome"
          placeholder="Digite o nome do herói"
          value={name}
          handleChanged={(value) => setName(value)}
        />
        <TextField
          label="Imagem"
          placeholder="Informe o endereço da imagem"
          value={image}
          handleChanged={(value) => setImage(value)}
        />
        <ListField
          required={true}
          label="Função"
          itens={props.roles}
          value={role}
          handleChanged={(value) => setRole(value)}
        />
        <Button>Criar card</Button>
      </form>
    </section>
  );
};

export default OrganoForm;
