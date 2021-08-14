import React, {useState, useContext} from 'react'
import axios from "axios"
import {useHistory} from 'react-router-dom'
import { AuthContext } from '../helpers/AuthContext'

function Login() {
    const [usuario, setUsuario] = useState("")
    const [password, setPassword] = useState("")
    const {setAuthState} = useContext(AuthContext)

    let history = useHistory();

    const login = () =>{
        const data = {usuario: usuario, password: password};
         axios.post("http://localhost:3000/auth/login", data).then((response) => {
             if(response.data.error){ alert(response.data.error);}
             else{
                localStorage.setItem("accessToken", response.data);
                setAuthState({usuario: response.data.usuario, id: response.data.id, status: true });
                history.push("/")
             }
             
         });
    }
    return (
        <div>
           <input type="text" onChange={(event)=> {setUsuario(event.target.value)}}/>
           <input type="password" onChange={(event)=> {setPassword(event.target.value)}}/>

           <button onClick={login}>Ingresar</button>
        </div>
    )
}

export default Login
