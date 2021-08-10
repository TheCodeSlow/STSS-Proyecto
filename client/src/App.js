import './App.css';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import Home from "./pages/Home"
import crearUsuario from './pages/crearUsuario';
import Usuario from './pages/Usuario';
import Registro from './pages/Registro';
import Login from './pages/Login';


function App() {  
   return <div className="App">
     
      <Router>
      <div className="navbar">
      <Link to="/crearUsuario"> Crear Usuario</Link>
      <Link to="/"> Home</Link>
      <Link to="/login"> Login</Link>
      <Link to="/registro"> Registro</Link>
      </div>;
      <Switch>
      <Route path= "/" exact component={Home}/>
      <Route path= "/crearUsuario" exact component={crearUsuario}/>
      <Route path= "/Usuario/:id" exact component={Usuario}/>
      <Route path= "/registro" exact component={Registro}/>
      <Route path= "/login" exact component={Login}/>
      </Switch>
      </Router>
       </div>;
}

export default App;
