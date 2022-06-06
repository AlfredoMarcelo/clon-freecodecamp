//nos permite usar los metodos de react
import React from "react"; 
/*
Archivos que se eliminan
-setUpTest
-reportWebVitals


*/



//un componente funcional es una funcion de JS
//un componente funcional retorna un elemento JSX 
function Testimonio(){
  return(
    <div className="contenedor-testimonio">
      <img
        className="imagen-testimonio"
        //para acceder a una imagen '../carpeta/nombreFoto'
        //.. hace referencia a al retroceso dentro de las carpetas
        // cada . es un nivel atras
        //todo lo que este dentro de {} se considera de tipo JS
        src={require("../imagenes/testimonio-emma.png")}
        alt="Foto de Emma"
      />

      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio">Emma Bostian en Suecia</p>
        <p className="cargo-testimonio">Ingeniera de Software en Spotify</p>
        <p className="texto-testimonio">"Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify."</p>
      </div>
    </div>
  );

}