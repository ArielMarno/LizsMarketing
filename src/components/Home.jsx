import '../styles/home.css';
import liz from '../assets/lizs.png';

const Home = () => {

  return (
    <div className='home'>
        <div className='home_content'>
            <h1>Liz's Marketing: <br />
            Tu aliado digital</h1>
            <p>Descubrí como generar comunicaciones precisas y efectivas puede ayudarte a llegar mucho mas lejos.</p>
            <div className='home_content-btn'>
                <a href="http://wa.me/5491127461454" className='btn'>Contactarse</a>
                <a href=" https://lizsmarketing.my.canva.site/" className='btn_alt'>Sobre Mi</a>
            </div>
        </div>

        <div className='home_img'>
            <img src={liz} alt="Liz" />
        </div>
        
    </div>
  )
}

export default Home