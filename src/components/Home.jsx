import '../styles/home.css';
import liz from '../assets/lizs.png';

const Home = () => {

  return (
    <div className='home'>
        <div className='home_content'>
            <h1>Liz's Marketing: <br />
            Tu aliado digital</h1>
            <p>Descubrí como generar comunicaciones precisas y efectivas pueden ayudarte a llegar mucho mas lejos.</p>
            <div className='home_content-btn'>
                <a href="" className='btn'>Contactarse</a>
                <a href="https://drive.google.com/file/d/1_tx7SmMiSedjylZVM4NQyt203xkMCFJw/view?usp=sharing" className='btn_alt'>Mas Información</a>
            </div>
        </div>

        <div className='home_img'>
            <img src={liz} alt="Liz" />
        </div>
        
    </div>
  )
}

export default Home