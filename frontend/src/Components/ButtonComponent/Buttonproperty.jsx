import React from 'react'
import './ButtonStyles.css'


const Buttonproperty = ({text,onClick}) => {
    
  return (
    <div>
        <button onClick={onClick} >{text}</button>
    </div>
  )
}

export default Buttonproperty