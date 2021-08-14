import './App.css';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import Home from "./pages/Home"
import crearUsuario from './pages/crearUsuario';
import Usuario from './pages/Usuario';
import Registro from './pages/Registro';
import Login from './pages/Login';
import { AuthContext } from './helpers/AuthContext'
import {useState, useEffect} from 'react'
import axios from 'axios';


function App() {
   const [authState, setAuthState] = useState({usuario: "", id: 0, status: false})

   useEffect(() => {
      axios.get('http://localhost:3000/auth/auth', { headers: {
         accessToken: localStorage.getItem('accessToken')}
         }
         ).then((response) => {
         if (response.data.error) 
         {
            setAuthState({...authState, status: false});
         }
         else{
            setAuthState({usuario: response.data.usuario, id: response.data.id, status: true});
         }
      })
         
      
   },[])

   const logout = () => {
         localStorage.removeItem("accessToken")
         setAuthState({usuario: "", id: 0, status: false})
   }
   return( <div className="App">
     <AuthContext.Provider value={{authState, setAuthState}}>
      <Router>
      <div className="navbar">
      <Link to="/crearUsuario"> Crear Usuario</Link>
      <Link to="/"> Home</Link>
      {!authState.status ? (
         <>
      <Link to="/login"> Login</Link>
      <Link to="/registro"> Registro</Link>
        </>
       ) : (
         <button onClick={logout}> Cerrar Sesion </button>
       
         )} 
         <h1>{authState.usuario}</h1>
      </div>
      <Switch>
      <Route path= "/" exact component={Home}/>
      <Route path= "/crearUsuario" exact component={crearUsuario}/>
      <Route path= "/Usuario/:id" exact component={Usuario}/>
      <Route path= "/registro" exact component={Registro}/>
      <Route path= "/login" exact component={Login}/>
      </Switch>
      </Router>
      </AuthContext.Provider>
       </div>)
}

export default App;
