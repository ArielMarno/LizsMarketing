import '../styles/services.css';

import ap from '../assets/icons/report.png';
import eye from '../assets/icons/eye-edit.png';
import hs from '../assets/icons/headset.png';
import cm from '../assets/icons/calendar.png';
import ig from '../assets/icons/brand-ig.png';
import lt from '../assets/icons/laptop.png';

import store from '../assets/mockup.webp';



const Card = ({ img, title, text }) =>{
  return(
    <div className='card_services'>
      <img src={img} alt={img} />
      <h4>{title}</h4>
      <p>{text}</p>
    </div>
  )
};

const Services = () => {
  return (
    <div className='services' id='servicios'>
      <div className='services_title'>
        <h2>Soluciones a medida para tu negocio</h2>
        <p>Te ofrezco soluciones personalizadas que se adaptan a las necesidades específicas de tu negocio, impulsando tu crecimiento con estrategias efectivas y creativas.</p>
      </div>
      <div className='services_card-container'>
        <Card img={ap} title="Asesoría Personalizada" text="Reducí tu inversión estableciendo prioridades en tu estrategia de marketing. Mejorá la presencia online de tu marca y destacate de la competencia."/>
        <Card img={eye} title="Identidad de Marca" text="Establecé una imagen única con un diseño que aumente el reconocimiento, genere confianza y credibilidad en tu potencial cliente."/>
        <Card img={hs} title="Asistente Virtual" text="Delegá tareas administrativas y, a su vez, accedé a una amplia gama de habilidades sin contratar personal adicional y con mayor flexibilidad."/>
        <Card img={cm} title="Calendario Mensual" text="Planificá y desarrollá tu estrategia de marketing sin dejar pasar las mejores oportunidades para promocionar tu negocio."/>
        <Card img={ig} title="Gestión de Instagram" text="Ganá seguidores de manera orgánica, aumentá la participación fomentando la interacción directa y mejorá la experiencia del usuario."/>
        <Card img={lt} title="Capacitación" text="Aprendé a organizar el calendario de contenido para tu negocio y convertite en community manager con ejercicios prácticos y soporte continuo."/>
      </div>

      <div className='services_card-store'>
        <div className='card-content'>
          <h4>Novedades</h4>
          <h2>Nuevos ebooks disponibles</h2>
          <p> Te presento mis nuevos ebook esenciales para transformar tu negocio. En ellos encontrarás estrategias clave y consejos prácticos para optimizar tus procesos y aumentar tus ventas. Aprovechá esta oportunidad para llevar tus ventas al próximo nivel y destacarte en el mercado con una guía completa y accesible.</p>
          <a href="https://lizsmarketing.tiendup.com/" className='btn'>Obtener Ahora</a>
        </div>
        <div className='card-img'>
          <img src={store} alt="tienda online" />
        </div>
      </div>

    </div>
  )
}

export default Services