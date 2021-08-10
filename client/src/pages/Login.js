import React, {useState} from 'react'
import axios from "axios"

function Login() {
    const [usuario, setUsuario] = useState("")
    const [password, setPassword] = useState("")

    const login = () =>{
        const data = {usuario: usuario, password: password};
         axios.post("http://localhost:3000/auth/login", data).then((response) => {
             console.log(response.data);
         })
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
