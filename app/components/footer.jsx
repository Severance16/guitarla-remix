import React from 'react'
import Navegacion from './navegacion'

function Footer() {
  return (
    <footer className='footer'>
        <div className='contenido'>
            <Navegacion/>
            <p className='copyright'>Todos los derechos reservados {new Date().getFullYear()}</p>
        </div>
    </footer>
  )
}

export default Footer