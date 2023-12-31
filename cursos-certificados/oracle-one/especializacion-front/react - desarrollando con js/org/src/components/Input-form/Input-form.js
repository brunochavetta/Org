import React from 'react'
import "./input-form.css"

const InputForm = (props) => {
  const placeholderModificado = `${props.placeholder}...`

  //Destructuración
  const { type = "text"} = props


  const manejarCambio = (e) => {
    props.actualizarValor(e.target.value)
  }

  return (
    <div className={ `input input-${type}`}>
        <label>{ props.titulo }</label>
        <input 
        placeholder = {placeholderModificado} 
        required={props.required} 
        value={props.valor} 
        onChange={manejarCambio}
        type={type}
        />
    </div>
  )
}

export default InputForm
