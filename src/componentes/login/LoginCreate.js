import React from "react";
import Input from "../form/Input"
import Error from "../interface/Error";
import Button from "../form/Button";
import useForm from "../../hooks/useForm";
import useFetch from "../../hooks/useFetch";
import { UseContext } from "../../useContext";
import { REGISTER_USER } from "../../api";
import Head from "../interface/Head";


const LoginCreate = () =>{

  const username = useForm()
  const password = useForm('password')
  const email = useForm('email')
  const { userLogin } = React.useContext(UseContext)
  const { request, error, loading} =  useFetch()
 
async function handleSubmit(e){
  e.preventDefault();

  const { url, options } = REGISTER_USER({
    username: username.value, password: password.value, email:email.value
})

  const { response } = await request(url, options);

  if(response.ok){
    userLogin(username.value, password.value)
  }

}

  return(
    <section className="enter">
      <Head title='Cadastro'/>
      <h1 className="title">Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input type='text' label='Usuário' id='username' {...username}/>
        <Input type='password' label='Senha' id='senha' {...password}/>
        <Input type='text' label='Email' id='email' {...email}/>
        {loading ? <Button disabled>Cadastrando...</Button> : <Button>Cadastrar</Button> }
        <Error error={error}/>
      </form>
    </section>  
    )
}

export default LoginCreate