import React from 'react'
import Styles from './Header.module.css'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../Assets/dogs.svg'
import { UseContext } from '../useContext'

const Header = () =>{

const { data } = React.useContext(UseContext)
  return (
      <div className={`${Styles.header}`}>
        <nav className={`container ${Styles.headerNav}`}>
          <Link className={Styles.logo} to='/' aria-label='Dogs Home'>
            <Logo/>
            </Link>
            {data ? 
            <div className={Styles.out}>
              <Link className={Styles.login} to='/conta' aria-label='navegação primária'>
                {data.nome}
                </Link>
            </div> : 
            <Link className={Styles.login} to='/login' aria-label='navegação primária'>Login/ Criar</Link>}
            
        </nav>      
      </div>
  )
}
export default Header