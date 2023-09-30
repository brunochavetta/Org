import React from 'react'
import "./MiOrg.css"

//HOCKS - ESTADO
/*const [nombreVar, funcionUtilizar] = useState(ValorInicial)*/
const MiOrg = (props) => {
    
  return (
    <div className='orgSection'>
        <h3 className='title'>Mi organización</h3>
        <img src='/img/add.png' alt='add' onClick={props.cambiarMostrar}/>
    </div>
  )
}

export default MiOrg
