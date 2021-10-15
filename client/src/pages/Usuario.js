import React, {useEffect, useState, useContext} from 'react'
import {useParams} from "react-router-dom"
import  axios from "axios";
import { AuthContext } from '../helpers/AuthContext'

function Usuario() {
    let { id } = useParams();
    const [postObject, setPostObject] = useState({});
    const [permisos, setPermisos] = useState([])
    const [newPermiso, setnewPermiso] = useState("")
    const {authState} = useContext(AuthContext)
   

    useEffect(()=> {
        axios.get(`http://localhost:3000/usuarios/byId/${id}`).then((response) => {
            setPostObject(response.data);
        });
        axios.get(`http://localhost:3000/permisos/${id}`).then((response) => {
            setPermisos(response.data)
        });
    }, []);


    const addPermiso = () => {
        axios.post ("http://localhost:3000/permisos", {tipoPermiso: newPermiso, UsuarioId: id}, 
        {
            headers: {
                accessToken: localStorage.getItem("accessToken"),
            }
        }
        )
        .then((response) =>{
            if(response.data.error){
                alert(response.data.error)
               console.log(response.data.error)
            }
            else {
                const permisotoAdd = {tipoPermiso: newPermiso, usuario: response.data.usuario}
                setPermisos([...permisos, permisotoAdd]);
                setnewPermiso("");
            }
            
        });
    }
    const deletePermiso = (id) => {
         axios.delete(`http://localhost:3000/permisos/${id}`, 
         {headers: {accessToken: localStorage.getItem('accessToken')
        }}).then(()=> {
            setPermisos(permisos.filter((val)=> {
                return val.id != id;
            }))
        });
    }
    return (
        <div className="paginaUsuario">
            <div className="ladoIzquierdo">
            <div className="usuario" id="individual">
            
            <div className="nombre"><label>codigo Empleado: </label>{postObject.codigoEmpleado}</div>
            <div className="body">  {postObject.nombre}</div>
            <div className="body">  {postObject.segundoNombre}</div>
            <div className="body">  {postObject.apellido}</div>
            <div className="body">  {postObject.usuario}</div>
            <div className="body">  {postObject.identidad}</div>
            <div className="body">  {postObject.departamento}</div>            
            <div className="body">  {postObject.telefono}</div>
            <div className="body">  {postObject.sede}</div>
            </div>;
            </div>
             
           <div className="ladoDerecho">Permisos (falta hacer cambios cap 7,10)
            <div className="añadirPermisoContainer"> <input type="text" placeholder="Tipo de Permiso" autoComplete="off" value={newPermiso} 
            onChange={(event) => {setnewPermiso(event.target.value)}}/></div>
            <div className="añadirPermisoContainer"> <input type="text" placeholder="Descripcion del Permiso" autoComplete="off"/></div>
            <button onClick={addPermiso}>Solicitar Permiso </button>
            <div className="listaDePermisos">
                {permisos.map((permiso, key) =>{
                return (
                <div key={key} className="permiso"> {permiso.tipoPermiso}
                <label>Usuario: {permiso.usuario}</label>
                <label>Descripcion del permiso: {permiso.Descripcion}</label>
                {authState.usuario === permiso.usuario  &&<button onClick={()=>{deletePermiso(permiso.id)}}>X </button>}
                </div>
                );
            })}
            </div>
            
          
            </div>
            
        
        </div>
    )
}

export default Usuario
