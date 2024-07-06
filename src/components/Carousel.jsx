import '../styles/carousel.css';
import React from 'react';
import CardCarousel from './CardCarousel';

import t1 from '../assets/Testimonies/cocinera-conectada.webp';
import t2 from '../assets/Testimonies/dais-yael.webp';
import t3 from '../assets/Testimonies/estefania-gervasoni.webp';
import t4 from '../assets/Testimonies/gabi.webp';
import t5 from '../assets/Testimonies/ikigai.webp';
import t6 from '../assets/Testimonies/real.webp';
import t7 from '../assets/Testimonies/v7.webp';

const CarouselSlider = () => {

  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <div className="wrapper">
      <i id="left" className="fa-solid fa-angle-left" onClick={()=> scroll('left')}></i>
      <ul className="carousel" ref={scrollRef}>
        <li className="card">
          <CardCarousel image={t1} text='"Me encantó todo! Me gustó mucho como quedó! Estoy contenta, gracias!"' client="Cocina Conectada"/>
        </li>
        <li className="card">
            <CardCarousel image={t2} text='"Hermosa mi nueva identidad, estoy muy contenta con el resultado. Acá en Venezuela no encontré quien me entendiera como lo hiciste vos!"' client="Dais Yael Make Up"/>
        </li>
        <li className="card">
            <CardCarousel image={t3} text='"La verdad que Eli es una genia. Con las preguntas claves parece que te conoce desde siempre. Estoy muy contenta"' client="Estefania Gervasoni"/>
        </li>
        <li className="card">
            <CardCarousel image={t4} text='"Mi experiencia con liz fue sumamente gratificante. Trabajo impecable, entregado en tiempo y forma y siguiendo con las instrucciones que propusimos."' client="Gabi Comida Casera"/>
        </li>
        <li className="card">
            <CardCarousel image={t5} text='"Muchas gracias por tus servicios, la verdad que fue un gran alivio saber que estaba casi todo en tus manos!"' client="Espacio Ikigai"/>
        </li>
        <li className="card">
            <CardCarousel image={t6} text='"Mi experiencia con Eli fue la mejor, supo desde un comienzo para donde orientarme con el proyecto. Sin duda la recomendaría y seguiremos trabajando juntos."' client="Real"/>
        </li>
        <li className="card">
            <CardCarousel image={t7} text='"Vino Pe7er no sería lo mismo sin la presencia y el gran trabajo que hace Liz."' client="Vino Pe7er"/>
        </li>
      </ul>
      <i id="right" className="fa-solid fa-angle-right" onClick={()=> scroll('right')}></i>
    </div>

  )
}

export default CarouselSlider