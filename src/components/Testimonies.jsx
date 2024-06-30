
import '../styles/testimonies.css';
import Carousel from './Carousel';


const Testimonies = () => {
  return (
    <div className='testimonies' id='testimonios'>
        <div className='testimonies_title'>
            <h2>Testimonios</h2>
            <p>Estamos orgullosos de lo que hacemos y de como podemos aportar al crecimiento de diversos proyectos. Estos son algunos de los testimonios de nuestros clientes!</p>
        </div>
        <Carousel/>
    </div>
  )
}

export default Testimonies