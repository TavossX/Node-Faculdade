import styles from "./Register.module.css";
import { useState, useContext } from "react";
import Input from "../../../Components/Form/input.jsx";
//import {Contexto} from "../../../Context/UserContext.jsx";
function Register() {
  const [name, setUser] = useState({});
  function handleSubmit(e) {
    e.preventDefault();
  }
  function handleOnChange(e) {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }
  return (
    <section className={styles.from_container}>
      <h1>Registrar</h1>
      <form onSubmit={handleSubmit}></form>
      <Input
        type="text "
        text="Nome"
        name="name"
        placeholder="Digite seu nome"
        handleOnChange={handleOnChange}
      />
      <Input
        type="email"
        text="Email"
        name="email"
        placeholder="Digite seu email"
        handleOnChange={handleOnChange}
      />
      <Input
        type="password"
        text="Senha"
        name="password"
        placeholder="Digite sua senha"
        handleOnChange={handleOnChange}
      />
      <Input
        type="password"
        text="Confirme sua senha"
        name="password"
        placeholder="Confirme sua senha"
        handleOnChange={handleOnChange}
      />
      <Input type="submit" value="Cadastrar" handleOnChange={handleOnChange} />
    </section>
  );
}

export default Register;
