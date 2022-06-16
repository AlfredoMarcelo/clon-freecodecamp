//nos permite usar los metodos de react
import React from "react";
import "../hojas-de-estilo/Testimonio.css" 
/*
Archivos que se eliminan
-setUpTest
-reportWebVitals


*/



//un componente funcional es una funcion de JS
//un componente funcional retorna un elemento JSX 
function Testimonio( props ){
  return(
    <div className="contenedor-testimonio">
      <img
        className="imagen-testimonio"
        //para acceder a una imagen '../carpeta/nombreFoto'
        //.. hace referencia a al retroceso dentro de las carpetas
        // cada . es un nivel atras
        //todo lo que este dentro de {} se considera de tipo JS
        src={require(`../imagenes/testimonio-${props.imagen}.png`)}
        alt={`Foto de ${props.imagen}`}
      />

      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio">
          <strong>{ props.nombre }</strong> en { props.pais}
        </p>
        <p className="cargo-testimonio">
          { props.cargo } en <strong>{ props.empresa }</strong>
        </p>
        <p className="texto-testimonio">
          { props.testimonio }
        </p>
      </div>
    </div>
  );

}
export default Testimonio;