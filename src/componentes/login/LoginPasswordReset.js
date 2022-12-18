import React from "react"
import { RESET_PASSWORD } from "../../api"
import useFetch from "../../hooks/useFetch"
import useForm from "../../hooks/useForm"
import Button from "../form/Button"
import Input from "../form/Input"
import { useNavigate } from "react-router-dom"
import Error from "../interface/Error"
import Head from "../interface/Head"





const LoginPasswordReset = () =>{

const [login, setLogin] = React.useState()
const [key, setKey] = React.useState()

const { request, loading, error } = useFetch()
const password = useForm('password')

const navigate = useNavigate()


React.useEffect(()=>{
  const params = new URLSearchParams(window.location.search)
  setLogin(params.get('login'))
  setKey(params.get('key'))
},[])

async function handleSubmit(e){
  e.preventDefault()
if (password.validate()){
const { url, options } = RESET_PASSWORD({login, key, password: password.value})
const { response } = await request(url,options)
  if (response && response.ok){
    navigate('/login')
  }
}
}

  return(
    <section>
      <Head title='Resetar Senha'/>
      <form onSubmit={handleSubmit}>
        <h1 className="title">Resetar Senha</h1>
        <Input type='password' label='Digite uma nova senha' id='password' {...password} />
        {loading ? <Button disabled>Enviando...</Button> : <Button>Enviar</Button>}
        <Error error={error}/>
      </form>
    </section>  
    )
}

export default LoginPasswordReset