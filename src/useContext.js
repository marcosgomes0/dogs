import React from "react";
import { GET_USER, TOKEN_POST, VALIDATE_TOKEN } from "./api";
import { useNavigate } from "react-router-dom";

export const UseContext = React.createContext()

export function UserStorage ({children}) {

  const navigate = useNavigate()


  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [login, setLogin] = React.useState(false);
  const [loading, setLoading] = React.useState(null);

  const userLogout = React.useCallback(async function (){
    setData(null)
    setError(null)
    setLogin(false)
    setLoading(false)
    localStorage.removeItem('token')
    navigate('/login');
  },[navigate])

async function  getUser(token){
  const {url, options} = GET_USER(token);
  const response = await fetch(url, options);
  const json = await response.json();
  setData(json);
  setLogin(true);
}

 async function userLogin (username, password) {
  try{
    setError(null)
    setLoading(true)
    const {url, options} = TOKEN_POST({username, password})
    const response = await fetch(url, options);
    if (!response.ok) throw new Error(`Error: dados inválidos`)
    const { token } = await response.json();
    localStorage.setItem('token', token);
    await getUser(token);

    navigate('/conta');
    
  } catch(err){
    setError(err.message)
    setLogin(false)
  } finally{
    setLoading(false)
  }
}

React.useEffect(()=>{
  async function autoLogin() {
  const token = localStorage.getItem('token');
  if (token) {
  try {
  setLoading(true)
  setError(false)
  const { url, options } = VALIDATE_TOKEN(token)
  const response = await fetch( url, options );
  if(!response.ok) throw new Error("token inválido")
  await getUser(token)
  } catch(err) {
   setError(err)
  await userLogout();
  } finally{
  setLoading(false)
  }
} else{
  setLogin(false)
}}
autoLogin()
},[userLogout])

  return ( <UseContext.Provider value={{userLogin, userLogout, error, data, login, loading}}>{children}</UseContext.Provider>)
}