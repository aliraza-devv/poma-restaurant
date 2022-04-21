import React from 'react';
import './ButtonSecondary.css';

const ButtonSecondary = ({title}) => {
  return (
    <div className='ml-8 mt-5 Button-Secondary-div'>
        <button className="Button-secondary">{title}</button>
    </div>
  )
}

export default ButtonSecondary