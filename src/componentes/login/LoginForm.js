import React from "react";
import Input from "../form/Input";
import Error from "../interface/Error";
import Styles from './LoginForm.module.css';
import Button from "../form/Button";
import StylesBtn from "../form/Button.module.css";
import { Link } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { UseContext } from "../../useContext";

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  const { userLogin, loading, error } =  React.useContext(UseContext);

  async function handleSubmit(e) {
    e.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
  }
}
  return (
    <section className="enter">
      <h1 className="title">Login</h1>
      <form onSubmit={handleSubmit} className={Styles.form}>
        <Input label="Usuário" type="text" id="user" {...username} />
        <Input label="Senha" type="password" id="password" {...password} />
        {loading ? <Button disabled>carregando...</Button> : <Button>Entrar</Button>}
        {error &&  <Error error={error}/>}
      </form>
      <Link className={Styles.perdeu} to='/login/perdeu'>Perdeu a senha?</Link>
      <div className={Styles.cadastro}>
        <h2 className={Styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
      <Link to='/login/criar' className={StylesBtn.button}>Cadastro</Link>
      </div>
    </section>
  );
};

export default LoginForm;
