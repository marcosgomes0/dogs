import Styles from './Login.module.css'
import React from 'react';
import LoginForm from './LoginForm'
import LoginCreate from './LoginCreate';
import LoginPasswordLost from './LoginPasswordLost';
import LoginPasswordReset from './LoginPasswordReset';
import { Routes, Route } from 'react-router-dom'
import { UseContext } from '../../useContext';
import { Navigate } from 'react-router-dom';
import NotFound from '../interface/NotFound';
import Head from '../interface/Head';

const Login = () => {

const { login } = React.useContext(UseContext);
  if( login === true ) return <Navigate to="/conta" />

  return (
  <section className={Styles.login}>
    <div className={Styles.forms}>
      <Head title='login'/>
        <Routes>
          <Route path="/" element={<LoginForm/>}/>
          <Route path="criar" element={<LoginCreate/>}/>
          <Route path="perdeu" element={<LoginPasswordLost/>}/>
          <Route path="resetar" element={<LoginPasswordReset/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
    </div>
  </section>
  )
};

export default Login;
