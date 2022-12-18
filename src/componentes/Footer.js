import Styles from './Footer.module.css'

import {ReactComponent as Dogs } from '../Assets/dogs.svg'

const Footer = () => {
  return(
    <footer className={Styles.footer}>
      <Dogs/>
      <p>Dogs. Alguns direitos reservados</p>
    </footer>
  )
};

export default Footer;
