import React from 'react';
import './ButtonPrimary.css'


const ButtonPrimary = ({title}) => {
  return (
    <div className='ml-16 mt-5'>
        <button className="Button">
            <span className='Span'>{title}</span>
            <div className="liquid"></div>
        </button>
    </div>
  )
}

export default ButtonPrimary