import React from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup';
import axios from 'axios';




function Registro() {
    const initialValues = {
        usuario: "",
        password: "",
    };


    const validationSchema = Yup.object().shape({
        usuario: Yup.string().min(5).max(15).required("Tiene que ingresar un usuario"),
        password: Yup.string().min(4).max(20).required("Tiene que ingresar una contraseña"),
    })


    const onSubmit = (data) =>{
           axios.post("http://localhost:3000/auth", data).then (()=>{
               console.log(data);
           })
    }
    return (
        <div>
            <Formik initialValues={initialValues} onSubmit={onSubmit}
           validationSchema={validationSchema}>
               <Form className="formContainer">
                 <label>usuario </label>
                 <ErrorMessage name="usuario" component="span"/>
                <Field 
                autocomplete="off"
                id="inputCreateUsuario" 
                name="usuario"
                 placeholder="(Ex. MValdez...)" />
                  <label>contraseña: </label>
                 <ErrorMessage name="password" component="span"/>
                <Field 
                autocomplete="off"
                type="password"
                id="inputCreateUsuario" 
                name="password"
                 placeholder="Escriba uan contraseña" />
                 
                 <button type="submit">Registraro</button>
               </Form>  
               
               </Formik>        
        </div>
    )
}

export default Registro
