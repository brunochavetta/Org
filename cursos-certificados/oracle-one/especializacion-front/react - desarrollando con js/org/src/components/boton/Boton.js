import React from 'react'
import "./Boton.css"

const Boton = (props) => {
  return (
    <div>
      <button className='boton'>{props.children}</button>
    </div>
  )
}

export default Boton

