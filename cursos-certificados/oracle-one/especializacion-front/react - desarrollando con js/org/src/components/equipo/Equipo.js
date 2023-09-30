import React from 'react'
import "./Equipo.css"
import Colaborador from '../Colaborador/Colaborador'
import hexToRgba from "hex-to-rgba"

const Equipo = (props) => {
    const { colorPrimario, colorSecundario, titulo, id } = props.datos
    const {colaboradores, eliminarColaborador, actualizarColorEquipo, like} = props

    const fondoObj = {
        backgroundColor: hexToRgba(colorPrimario, 0.6)
    }

    const estiloTitulo = {
        borderColor: colorPrimario
    }

  return (<>{ colaboradores.length > 0 && 
    <section className='equipo' style={fondoObj}>
      <input 
        type='color'
        className='input-color'
        value={colorPrimario}
        onChange={(evento) => actualizarColorEquipo(evento.target.value, id) }
      />
      <h3 style={estiloTitulo}>{titulo}</h3>
      <div className='colaboradores'>
        {
            colaboradores.map( (colaborador, index) => <Colaborador 
            colaborador={colaborador} 
            key={index} 
            colorPrimario={colorPrimario}
            eliminarColaborador={eliminarColaborador}
            like={like}
            />
            )
        }
      </div>
    </section>
}</>)
}

export default Equipo
