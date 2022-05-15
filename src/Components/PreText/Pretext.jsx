import React from 'react'
import './Pretext.css'

const Pretext = (props) => {
  return (
    <div className='heading'>
        <div></div>
        <p>{props.text}</p>
        <div></div>
    </div>
    
  )
}

export default Pretext