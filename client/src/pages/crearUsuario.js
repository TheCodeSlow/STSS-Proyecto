import React from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import axios from 'axios';
import { useHistory } from "react-router-dom";


function CrearUsuario() {

    let history = useHistory();
    const initialValues = {
        nombre: "",
        segundoNombre: "",
        apellido: "",
        usuario: "",
        identidad:"",
        departamento: "",
        codigoEmpleado: "",
        telefono: "",
        sede: ""


    }

    const validationSchema = Yup.object().shape({
        nombre: Yup.string().required("Tiene que ingresar su nombre"),
        segundoNombre: Yup.string().required("Tiene que ingresar su segundo nombre"),
        apellido: Yup.string().required("Tiene que ingresar su apellido"),
        usuario: Yup.string().min(5).max(15).required("Tiene que ingresar un usuario"),
        identidad: Yup.number().required("Tiene que ingresar su numero de identidad"),
        departamento: Yup.string().required("Tiene que ingresar al departamento que pertenece"),
        codigoEmpleado: Yup.string().required("Tiene que ingresar su codigo de empleado"),
        telefono: Yup.string().min(8).max(8).required("Tiene que ingresar su numero de telefono"),
        sede: Yup.string().required("Tiene que ingresar a la sede que pertenece")

    })

    //
    const onSubmit = (data) =>{
        axios.post("http://localhost:3000/usuarios", data).then((response) => {
            history.push("/");
          });
    };

    

    return (
        <div className="crearUsuarioPage">
           <Formik 
           initialValues={initialValues} 
           onSubmit={onSubmit}
           validationSchema={validationSchema}>
                <Form className="formContainer">
                <label>Nombre </label>
                <ErrorMessage name="nombre" component="span"/>
                <Field 
                autocomplete="off"
                id="inputCreateNombre" 
                name="nombre"
                 placeholder="(Ex. Miguel...)" />
                 <label>Segundo Nombre </label> 
                 <ErrorMessage name="segundoNombre" component="span"/>               
                <Field 
                autocomplete="off"
                id="inputCreateSegundoNombre" 
                name="segundoNombre"
                 placeholder="(Ex. Alonzo...)" />
                 <label>Apellido </label>
                 <ErrorMessage name="apellido" component="span"/>
                <Field
                 autocomplete="off"
                 id="inputCreateApellido" 
                name="apellido"
                 placeholder="(Ex. Valdez...)" />
                 <label>usuario </label>
                 <ErrorMessage name="usuario" component="span"/>
                <Field 
                autocomplete="off"
                id="inputCreateUsuario" 
                name="usuario"
                 placeholder="(Ex. MValdez...)" />
                 <label>Identidad </label>
                 <ErrorMessage name="identidad" component="span"/>
                <Field
                 autocomplete="off"
                 id="inputCreateIdentidad" 
                name="identidad"
                 placeholder="(Ex. 03182000000042...)" />
                 <label>Departamento </label>
                 <ErrorMessage name="departamento" component="span"/>
                <Field
                autocomplete="off"
                id="inputCreateDepartamento" 
                name="departamento"
                 placeholder="(Ex. Informatica...)" />
                 <label>codigoEmpleado</label>
                 <ErrorMessage name="codigoEmpleado" component="span"/> 
                <Field
                autocomplete="off"
                id="inputCreateCodigoEmpleado" 
                name="codigoEmpleado"
                 placeholder="(Ex. HRN1999...)" />
                 <label>Telefono </label>
                 <ErrorMessage name="telefono" component="span"/>
                <Field
                autocomplete="off"
                id="inputCreateTelefono" 
                name="telefono"
                 placeholder="(Ex. 31970007..)" />
                 <label>Sede </label>
                 <ErrorMessage name="sede" component="span"/>
                <Field
                autocomplete="off"
                id="inputCreateSede" 
                name="sede"
                 placeholder="(Ex. Tegucigalpa...)" />
                 <button type="submit">Create Usuario</button>
               </Form>  
               
               </Formik>       
        </div>
    )
}

export default CrearUsuario
