import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const Formulario = () => {
  const [formularioEnv, cambiarFormularioEnv] = useState(false);
  return (
    <>
	
      <Formik
        initialValues={{
          nombre: "",
          correo: "",
          texto: "",
        }}
        validate={(valores) => {
          let errores = {};

          //Validacion nombre
          if (!valores.nombre) {
            errores.nombre = "Ingrese un nombre.";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
            errores.nombre = "El nombre solo puede contener espacios y letras.";
          }

          //Validacion correo
          if (!valores.correo) {
            errores.correo = "Ingrese un correo electrónico.";
          } else if (
            !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
              valores.correo
            )
          ) {
            errores.correo =
              "El correo solo puede tener letras, puntos, numeros, guiones y guion bajo.";
          }

          return errores;
        }}
        onSubmit={(valores, { resetForm }) => {
          resetForm();
          // console.log("Formulario enviado");
          cambiarFormularioEnv(true);
          setTimeout(() => cambiarFormularioEnv(false), 3500);
        }}
      >
        {({ errors }) => (
          <Form className="formulario container">
            <div>
              <h2>Contactenos</h2>
            </div>
            {/* {console.log(errors)} */}
            {/* {console.log(touched)} */}
            <div>
              <label htmlFor="nombre">Nombre</label>
              <Field
                type="text"
                id="nombre"
                name="nombre"
                placeholder="Juan Pablo"
              />
              <ErrorMessage
                name="nombre"
                component={() => <div className="error">{errors.nombre}</div>}
              />
            </div>
            <div>
              <label htmlFor="correo">Correo</label>
              <Field
                type="email"
                id="correo"
                name="correo"
                placeholder="juanpablo@gmail.com"
              />
              <ErrorMessage
                name="correo"
                component={() => <div className="error">{errors.correo}</div>}
              />
            </div>

			<div>
				<label>
					<Field type="radio" name="sexo" value="Hombre"/> Hombre
				</label>
				<label>
					<Field type="radio" name="sexo" value="Mujer"/> Mujer
				</label>
				<label>
					<Field type="radio" name="sexo" value="Prefiero no decirlo" /> Prefiero no decirlo
				</label>
			</div>

			<div>
				<Field  name="mensaje" as="textarea" placeholder="Escriba aqui su mensaje."/>
			</div>

            <button type="submit">Enviar</button>
            {formularioEnv && (
              <p className="exito">Su consulta fue enviada correctamente.</p>
            )}
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Formulario;
