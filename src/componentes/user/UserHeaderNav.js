import React from "react"
import { NavLink, useParams } from "react-router-dom"
import { UseContext } from "../../useContext"
import { ReactComponent as Fotos } from '../../Assets/feed.svg'
import { ReactComponent as Post } from '../../Assets/adicionar.svg'
import { ReactComponent as Sair } from '../../Assets/sair.svg'
import Styles from './UserHeaderNav.module.css'
import UseMedia from "../../hooks/useMedia"

const UserHeaderNav = () => {

  const params = useParams()
  const { userLogout } = React.useContext(UseContext)
  const [mobileMenu, setMobileMenu] = React.useState(false)
  const mobile = UseMedia('(max-width: 40rem)')

  React.useEffect(()=>{
    setMobileMenu(false)
  }, [params])

  return (<>
    {mobile && (<button className={`${Styles.mobileButton} ${mobileMenu && Styles.menuAtivo}`} aria-label="menu" onClick={()=> {setMobileMenu(!mobileMenu)}}></button>)}

    <nav className={` ${mobile ? Styles.navMobile: Styles.nav} ${mobileMenu && Styles.navMobileAtivo}`}>
      <NavLink end to='/conta'><Fotos/> 
      {mobile && 'Minhas Fotos'}</NavLink>
      <NavLink to='/conta/postar'> <Post/>  {mobile && 'Adicionar Foto'}</NavLink>
      <button onClick={userLogout}> <Sair/>  {mobile && 'Sair'}</button>
    </nav>
    </>
  )
}

export default UserHeaderNav