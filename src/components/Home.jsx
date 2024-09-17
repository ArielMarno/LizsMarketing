import '../styles/home.css';
import liz from '../assets/lizs.png';

const Home = () => {

  return (
    <div className='home'>
        <div className='home_content'>
            <h1>Liz's Marketing: <br />
            Tu aliada digital</h1>
            <p>Descubrí cómo generar comunicaciones precisas y efectivas puede ayudarte a llegar mucho más lejos.</p>
            <div className='home_content-btn'>
                <a href="http://wa.me/5491127461454" className='btn'>Contactarse</a>
                <a href="https://lizsmarketing.tiendup.com/" className='btn_alt'>Tienda Online</a>
            </div>
        </div>

        <div className='home_img'>
            <img src={liz} alt="Liz" />
        </div>
        
    </div>
  )
}

export default Home