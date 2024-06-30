import '../styles/contact.css';

import logo from '../assets/lm_logo2.png';

import wsp from '../assets/Socials/wsp.png';
import linkedin from '../assets/Socials/in.png';
import ig from '../assets/Socials/ig.png';
import be from '../assets/Socials/be.png';

const Contact = () => {
  return (
    <div className='contact' id='contacto'>
        <div className='contact_content'>
            <div className='contact_logo'>
                <a href="#"><img src={logo} alt="logo Liz´s Marketing" /></a>
            </div>
            <div className='contact_data'>
                <div className='contact_data-title'>
                    <h3>¿Listo para llevar tu negocio <br />al siguiente nivel?</h3>
                    <p>Dejamos tu email y nos contactaremos a la brevedada para despejar cualquier duda.</p>
                </div>
                <div className='contact_data-input'>
                    <form action="">
                        <input type="text" placeholder='Ingresa tu email' />
                        <a href="" className='btn'>Enviar</a>
                    </form>
                </div>
                
                <div className='contact_data-socials'>
                    <h3>Nuestras Redes Sociales</h3>
                    <div className='contact_data-socials--links'>
                        <a href="http://wa.me/5491127461454"><img src={wsp} alt="whatsapp"/></a>
                        <a href="https://www.linkedin.com/in/jesiielidiaz/"><img src={linkedin} alt="linkedin"/></a>
                        <a href="https://www.instagram.com/lizsmarketing/"><img src={ig} alt="instagram"/></a>
                        <a href="https://www.behance.net/elizabethdiaz13"><img src={be} alt="behance"/></a>
                    </div>
                </div>
            </div>
        </div>
        <div className='contact_copy'>
            <p>Copyright©2024 Liz’s Marketing. Todos los derechos reservados. Sitio web diseñado y desarrollado por <a href="https://sunfloweragencia.com/">SunFlower Agencia Digital</a>.</p>
        </div>
    </div>
  )
}

export default Contact