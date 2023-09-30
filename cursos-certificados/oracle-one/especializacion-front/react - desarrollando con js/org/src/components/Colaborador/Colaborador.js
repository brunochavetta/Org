import React from 'react'
import "./Colaborador.css"
import {AiFillCloseCircle, AiOutlineHeart, AiFillHeart } from "react-icons/ai"

const Colaborador = (props) => {
    const {nombre, puesto, foto, equipo, id, fav} = props.colaborador
    const {eliminarColaborador, colorPrimario, like} = props
    const fondoEncabezado = {
        backgroundColor: colorPrimario
    }
  return (
    <div className='colaborador'>
        <AiFillCloseCircle className='eliminar' onClick={() => eliminarColaborador(id)} />
        <div className='encabezado' style={fondoEncabezado}>
            <img src={foto} alt={nombre}/>
        </div>
        <div className='info'>
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
            {fav ? <AiFillHeart color='red' onClick={() => like(id)} /> : <AiOutlineHeart  onClick={() => like(id)} />}
        </div>
      
    </div>
  )
}

export default Colaborador
