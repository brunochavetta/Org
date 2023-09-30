import React from 'react'
import "./Form.css"
import { useState } from 'react'
import InputForm from '../Input-form/Input-form'
import ListaOpciones from '../ListaOpciones/ListaOpciones'
import Boton from '../boton/Boton'

const Form = (props) => {

  const [nombre, actualizarNombre] = useState("")
  const [puesto, actualizarPuesto] = useState("")
  const [foto, actualizarFoto] = useState("")
  const [equipo, actualizarEquipo] = useState("")

  const [titulo, actualizarTitulo] = useState()
  const [color, actualizarColor] = useState()
  
  const manejarEnvio = (evento) => {
    evento.preventDefault() // --> detiende la configuración por defecto, en el caso del formulario es la recarga de la página cuando se envía
    let datosEnviar = {
      nombre: nombre,
      puesto: puesto,
      foto: foto,
      equipo: equipo
    }
    props.registrarColaborador(datosEnviar)
  }

  const manejarNuevoEnvio = (e) => {
    e.target.preventDefault()
    props.crearEquipo({ titulo, colorPrimario: color })
  }

  return (
    <section className='form'>
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador</h2>
            <InputForm 
            titulo="Nombre" 
            placeholder="Ingresar nombre" 
            required 
            valor={nombre} 
            actualizarValor={actualizarNombre} 
            />
            <InputForm 
            titulo="Puesto" 
            placeholder="Ingresar puesto" 
            required 
            valor={puesto} 
            actualizarValor={actualizarPuesto} 
            />
            <InputForm 
            titulo="Foto" 
            placeholder="Ingresar enlace de foto" 
            required 
            valor={foto} 
            actualizarValor={actualizarFoto} 
            />
            <ListaOpciones 
            valor={equipo}
            actualizarEquipo={actualizarEquipo}
            equipos={props.equipos}
            />
            <Boton>Crear</Boton>
        </form>

        <form onSubmit={manejarNuevoEnvio}>
            <h2>Rellena el formulario para crear el equipo</h2>
            <InputForm 
            titulo="Titulo" 
            placeholder="Ingresar titulo" 
            required 
            valor={titulo} 
            actualizarValor={actualizarTitulo} 
            />
            <InputForm 
            titulo="Color" 
            placeholder="Ingresar el color en Hex" 
            required 
            valor={color} 
            actualizarValor={actualizarColor} 
            type="color"
            />
            <Boton>Registrar Equipo</Boton>     
            </form>
    </section>
  )
}

export default Form
