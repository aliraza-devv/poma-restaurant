import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import './ButtonPrimary.css';


const ButtonPrimary = ({title}) => {
  return (
    <div className='ml-16 mt-5'>
        <button className="Button">
          <Link smooth to='#menu'>
            <span className='Span'>{title}</span>
            <div className="liquid"></div>
          </Link>
        </button>
    </div>
  )
}

export default ButtonPrimary