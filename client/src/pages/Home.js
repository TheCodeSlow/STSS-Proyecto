import React from 'react'
import axios from 'axios';
import {useEffect, useState} from 'react';
import { useHistory } from "react-router-dom";



function Home() {

    const[listadeUsuarios, setlistadeUsuarios] = useState([]);
    let history = useHistory();

    useEffect(() =>{
      axios.get("http://localhost:3000/usuarios").then((response) => {
        setlistadeUsuarios(response.data);
      })
    }, []);
    return (
     <div>
      {listadeUsuarios.map((value, key)=>{      
      return(
        //Arreglar id
       <div key={key} className="usuario" onClick={()=>{history.push(`/Usuario/${value.id}`)}}>  
      
      <div className="nombre"> {value.nombre}</div> 
      <div className="body"> {value.segundoNombre}</div> 
      <div className="body"> {value.apellido}</div> 
      <div className="body"> {value.identidad}</div> 
      <div className="body"> {value.departamento}</div> 
      <div className="body"> {value.telefono}</div> 
      <div className="body"> {value.sede}</div> 
      <div className="footer"> {value.usuario}</div> 
      </div>
      );
      })}
        </div>
        
    )
}

export default Home
