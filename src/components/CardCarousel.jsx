import '../styles/cardcarousel.css';

const CardCarousel = ({image, text, client}) => {
  return (
    <div className='card_carousel'>
        <div className='card_image'>
            <img src={image} alt={image} />
        </div>

        <div className='card_content'>
            <p>{text}</p>
            <h3>{client}</h3>
        </div>   
    </div>
  )
}

export default CardCarousel