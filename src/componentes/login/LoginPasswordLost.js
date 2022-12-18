import { LOST_PASSWORD } from "../../api"
import useFetch from "../../hooks/useFetch"
import useForm from "../../hooks/useForm"
import Button from "../form/Button"
import Input from "../form/Input"
import Error from "../interface/Error"
import Head from "../interface/Head"











const LoginPasswordLost = () =>{


const login = useForm()
const { request, error, loading, data } = useFetch()
const location = window.location.href.replace('perdeu', 'resetar')


async function handleSubmit(e){
e.preventDefault()
if (login.validate()){
const { url, options } = LOST_PASSWORD({login: login.value, url: location})
await request(url, options)
}
}

  return(
    <section>
      <Head title='Perdeu a Senha'/>
      <h1 className="title">Perdeu a Senha?</h1>
      {data ? <p style={{color: 'green'}}>{data}</p> : <form onSubmit={handleSubmit}>
        <Input type='text' label='Usuário / Email' id='email' {...login}/>
        {loading ? <Button disabled>Enviando...</Button> : <Button>Enviar</Button>}
      </form>}
    </section>  
    )
}

export default LoginPasswordLost