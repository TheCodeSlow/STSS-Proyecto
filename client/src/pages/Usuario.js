import React, {useEffect, useState} from 'react'
import {useParams} from "react-router-dom"
import  axios from "axios";

function Usuario() {
    let { id } = useParams();
    const [postObject, setPostObject] = useState({});
    const [permisos, setPermisos] = useState([])

    useEffect(()=> {
        axios.get(`http://localhost:3000/usuarios/byId/${id}`).then((response) => {
            setPostObject(response.data);
        });
        axios.get(`http://localhost:3000/permisos/${id}`).then((response) => {
            setPermisos(response.data)
        });
    })
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
            <div className="ladoDerecho">Permisos
            <div className="añadirPermisoContainer"> <input type="text" placeholder="Tipo de Permiso" autoComplete="off"/></div>
            <div className="añadirPermisoContainer"> <input type="text" placeholder="Descripcion del Permiso" autoComplete="off"/></div>
            <button>Solicitar Permiso </button>
            <div className="listaDePermisos">{permisos.map((permiso, key) =>{
                return <div key={key} className="permiso">{permiso.tipoPermiso}</div>
                
            })}</div>
            
          
            </div>
        </div>
    )
}

export default Usuario
