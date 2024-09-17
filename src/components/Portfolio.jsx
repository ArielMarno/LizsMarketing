import '../styles/portfolio.css';


import barrio from '../assets/Portfolio/barrio.webp';
import gio from '../assets/Portfolio/gio.webp';
import subasta from '../assets/Portfolio/subasta.webp';
import v7 from '../assets/Portfolio/v7.webp';


const Portfolio = () => {
  return (
    <div className='portfolio' id='portfolio'>

        <div className='portfolio_content'>
            <h2>Algunos de mis trabajos</h2>
            <div className='portfolio_content-btn'>
                <a href=" http://wa.me/5491127461454" className='btn'>Contactarse</a>
                <a href="https://www.behance.net/elizabethdiaz13" className='btn_alt'>Ver Portafolio</a>
            </div>
        </div>

        <div className='portfolio_works'>

            <div className="box-portafolio">
                <img src={gio} alt="logo" />
                <div className="mask">
                    <a href="https://www.behance.net/gallery/191156593/Gio-Encuadernaciones-Logo">Gio</a> 
                </div>
            </div>

            <div className="box-portafolio">
                <img src={barrio} alt="logo" />
                <div className="mask">
                    <a href="https://www.behance.net/gallery/202176571/El-Barrio-Redes-Sociales">Barrio</a>
                </div>  
            </div>
            
            
            <div className="box-portafolio">
                <img src={subasta} alt="logo" />
                <div className="mask">
                    <a href="https://www.behance.net/gallery/200044571/Subasta-tu-auto-Identidad-de-marca">Subasta</a>
                </div> 
            </div>
           
          
            <div className="box-portafolio">
                <img src={v7} alt="logo" />
                <div className="mask">
                    <a href="https://www.behance.net/gallery/171992903/VINOPE7ER-Redes-Sociales">V7</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Portfolio