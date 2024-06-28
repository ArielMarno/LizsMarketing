import '../styles/services.css';

import ap from '../assets/icons/report.png';
import eye from '../assets/icons/eye-edit.png';
import hs from '../assets/icons/headset.png';
import cm from '../assets/icons/calendar.png';
import ig from '../assets/icons/brand-ig.png';
import lt from '../assets/icons/laptop.png';



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
        <p>Te ofrecemos soluciones personalizadas que se adaptan a las necesidades específicas de tu negocio, impulsando tu crecimiento con estrategias efectivas y creativas.</p>
      </div>
      <div className='services_card-container'>
        <Card img={ap} title="Asesoría Personalizada" text="Reduce tu inversión estableciendo prioridades en tu estrategia de marketing. Mejora la presencia online de tu marca y destaca de la competencia."/>

        <Card img={eye} title="Identidad de Marca" text="Establece una imagen única con un diseño que aumente el reconocimiento, genere confianza y credibilidad en tus potenciales clientes."/>

        <Card img={hs} title="Asistente Virtual" text="Delega tareas administrativas y, a su vez, accede a una amplia gama de habilidades sin contratar personal adiciona y con mayor flexibilidad."/>

        <Card img={cm} title="Calendario Mensual" text="Planifica y desarrolla tus estrategias de marketing sin dejar pasar las mejores oportunidades para promocionar tu negocio."/>

        <Card img={ig} title="Gestión de Instagram" text="Gana seguidores de manera orgánica, aumenta la participación fomentando la interacción directa y mejora la experiencia del usuario."/>
        <Card img={lt} title="Capacitación" text="Aprende a organizar el calendario de contenido para tu negocio y conviértete en community manager con ejercicios prácticos y soporte continuo."/>

      </div>

    </div>
  )
}

export default Services