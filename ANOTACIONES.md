## import React from "react"; 
- nos permite usar los    metodos de react

## index.js
- Es el documento que envia los componentes a renderizar al HTML principal

## componentes
- un componente funcional es una funcion de JS

- un componente funcional retorna un elemento JSX 

## Exportar un componente de funcion
- se debe quede en minuto 1.50

## Reconocer un componente
- Para que react reconozca un componente debe estar en PascalCase y dentro de etiqueta
    ej: <Testimonio/>

## Los componentes se deben importar
- se debe utilizar import NombreComponente from '../ubicacionComponente/componente.js' .

## Exportar un componente
- Para utilizar un componente en otro o al HTML principal, se debe añadir la exportacion. Esta puede ser de dos formas:
- Por default => export defautl NombreComponente; . Este solo permite exportar el componente

- Nombrada => aqui se puede exportar varios elementos de un solo componente. La diferencia esta en la importación. Ahora se deberá excribir entre { NombreElemento } en el contenedor padre.

## Asignar estilos css 

- Se aplica con una asignacion universal *, margin y padding 0. esto porque los buscadores vienen con hojas de stilos con margin y padding por default

## Props

- el proposito de react es crear componentes reusables.
-  se definen como parametros dentro de la funcion componentes

### Pasar props a un componente

- para el componente que va a utilizar props, debe recibirlos del componente padre que lo utiliza. En este caso App debe enviarle los props a Testimonio. Porque app renderiza Testimonio.