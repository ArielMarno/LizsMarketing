import '../styles/about.css';
import values from '../assets/values.webp';

const about = () => {
  return (
    <div className='about'>
        <div className='about_title'>
            <h2>Integridad, creatividad y responsabilidad</h2>
            <p>Me guío por principios sólidos, ofreciendo soluciones éticas, innovadoras y comprometidas con el éxito de tu negocio.</p>
        </div>
        <div className='about_content'>
            <div className='about_img'>
                <img src={values} alt="persona trabajando" />
            </div>
            <div className='about_values'>
                <div className='values'>
                    <h4>Integridad</h4>
                    <p> Estoy comprometida a actuar con honestidad y transparencia en todas mis acciones, garantizando confianza y ética en cada uno de mis proyectos.</p>
                </div>
                <div className='values'>
                    <h4>Creatividad</h4>
                    <p>La creatividad impulsa cada estrategia, permitiendo desarrollar soluciones innovadoras y originales que destacan en el mercado y capturan la atención de tu audiencia.</p>
                </div>
                <div className='values'>
                    <h4>Responsabilidad</h4>
                    <p>Trabajo con profesionalismo y cumplo con los estándares más altos, garantizando resultados de calidad y un impacto positivo para tu negocio y comunidad.</p>
                </div>

            </div>
        </div>
    </div>
  )
}

export default about