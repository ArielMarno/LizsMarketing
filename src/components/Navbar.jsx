import { React, useState } from 'react'
import '../styles/navbar.css';
import Burguer from './Burguer';
import logo from '../assets/lm_logo1.png';
const Navbar = () => {

  const[click, setClick] = useState(false);
  const handleClick = () =>{
  //setear el booleano opuesto al actual cuando se hace click en el boton
    setClick(!click);
  }



  return (
    <div className='navbar'>
      <div className='navbar_logo'>
        <a href="#"><img src={logo} alt="logo" /></a>
      </div>
      <nav className={`links ${click ? 'active' : ''}`}>
        <a href="#" className='link_orange'>Inicio</a>
        <a href="#servicios" className='link_pink'>Servicios</a>
        <a href="#portfolio" className='link_light'>Portfolio</a>
        <a href="#testimonios" className='link_fuchsia'>Testimonios</a>
        <a href="#contacto" className='link_violet'>Contacto</a>
      </nav>
      <div className="burguer">
        <Burguer click={click} handleClick={handleClick}/> 
      </div>
    </div>
  )
}

export default Navbar