import './App.css';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import Home from "./pages/Home"
import crearUsuario from './pages/crearUsuario';
import Usuario from './pages/Usuario';

function App() {  
   return <div className="App">
     
      <Router>
      <div className="navbar">
      <Link to="/crearUsuario"> Crear Usuario</Link>
      <Link to="/"> Home</Link>
      </div>;
      <Switch>
      <Route path= "/" exact component={Home}/>
      <Route path= "/crearUsuario" exact component={crearUsuario}/>
      <Route path= "/Usuario/:id" exact component={Usuario}/>
      </Switch>
      </Router>
       </div>;
}

export default App;
