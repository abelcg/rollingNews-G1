import React from "react";
import { Formik } from "formik";


const Formulario = () => {
  return (
    <>
      <Formik
	  	initialValues={{
			  nombre : "",
			  correo : "",
			  texto: ""
		  }}
		  validate={ (valores) => {
			let errores = {};

			//Validacion nombre
			if(!valores.nombre){
				errores.nombre = "Ingrese un nombre."
			}else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)){
				errores.nombre= "El nombre solo puede contener espacios y letras."
			}

			//Validacion correo
			if(!valores.correo){
				errores.correo = "Ingrese un correo electrónico."
			}else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)){
				errores.correo= "El correo solo puede tener letras, puntos, numeros, guiones y guion bajo."
			}

			//Validacion de texto
			if(!valores.texto){
				errores.texto = "Ingrese su mensaje."
			}else if(!/^[a-zA-Z ]*$/.test(valores.texto)){
				errores.texto= "El texto solo puede tener letras A...Z a...z"
			}


			return errores;
		  }}
	  	onSubmit={(valores, {resetForm}) => {
			  resetForm();
			// console.log("Formulario enviado");
		  }}
	  >
        {({values, errors, touched , handleSubmit, handleChange, handleBlur}) => (
          <form className="formulario" onSubmit={handleSubmit}>
			  {/* {console.log(errors)} */}
			  {/* {console.log(touched)} */}
            <div>
              <label htmlFor="nombre">Nombre</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                placeholder="Juan Pablo"
				value={values.nombre}
				onChange={handleChange}
				onBlur={handleBlur}
              />
			  {touched.nombre && errors.nombre && <div className="error">{errors.nombre}</div>}
            </div>
            <div>
              <label htmlFor="correo">Correo</label>
              <input
                type="email"
                id="correo"
                name="correo"
                placeholder="juanpablo@gmail.com"
				value={values.correo}
				onChange={handleChange}
				onBlur={handleBlur}
              />
			  {touched.correo && errors.correo && <div className="error">{errors.correo}</div>}
            </div>
            <div>
              <label htmlFor="texto">Texto</label>
              <input
                type="text"
                id="texto"
                name="texto"
                placeholder="Deje su mensaje aquí"
				value={values.texto}
				onChange={handleChange}
				onBlur={handleBlur}
              />
			  {touched.texto && errors.texto && <div className="error">{errors.texto}</div>}
            </div>
            <button type="submit">Enviar</button>
			
          </form>
        )}
      </Formik>
    </>
  );
};

export default Formulario;
