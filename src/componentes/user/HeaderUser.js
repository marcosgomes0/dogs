import React, { useEffect } from 'react'
import Styles from './HeaderUser.module.css'
import UserHeaderNav from "./UserHeaderNav"
import { useParams } from 'react-router-dom'

const HeaderUser = () => {

  const [title, setTitle] = React.useState(null)
  const params = useParams()
  
  useEffect(()=>{
  if(params['*'] === ''){
    setTitle('Minha Conta')
  }  else if(params['*'] === 'postar'){
    setTitle('Postar Foto')
  }

  },[params])

  return (
    <section className={Styles.header}>
    <h1 className="title">{title ? title : 'Minha Conta'}</h1>
    <UserHeaderNav/>
    </section>
  )
}

export default HeaderUser