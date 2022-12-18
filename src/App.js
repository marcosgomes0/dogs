import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import User from './componentes/user/User';
import Header from './componentes/Header';
import Footer from './componentes/Footer';
import Photo from './componentes/photo/Photo'
import Home from './componentes/Home';
import Login from './componentes/login/Login';
import UserProfile from './componentes/user/UserProfile';
import { UserStorage } from './useContext';
import ProtectedRoute from './componentes/interface/ProtectedRoute';
import NotFound from './componentes/interface/NotFound';



function App() {
  return (
    <div className='global'>
    <Router>
      <UserStorage>
        <Header/>
        <main className='main'>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="login/*" element={<Login/>}/>
            <Route path="foto/:id" element={<Photo/>}/>
            <Route path="perfil/:user" element={<UserProfile/>}/>
            <Route path="conta/*" element={<ProtectedRoute><User/></ProtectedRoute>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </main>
        <Footer/>
      </UserStorage>
    </Router>
    </div>
  )
   
}

export default App;
