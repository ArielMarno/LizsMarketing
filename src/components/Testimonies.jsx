
import '../styles/testimonies.css';
import Carousel from './Carousel';


const Testimonies = () => {
  return (
    <div className='testimonies' id='testimonios'>
        <div className='testimonies_title'>
            <h2>Testimonios</h2>
            <p>Estoy orgullosa de lo que hago y de cómo puedo aportar al crecimiento de diversos proyectos. Estos son algunos de los testimonios de mis clientes.</p>
        </div>
        <Carousel/>
    </div>
  )
}

export default Testimonies