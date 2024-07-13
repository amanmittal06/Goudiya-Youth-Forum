import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Carousel.module.css'; // Example CSS module for styling
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const PrevArrow = (props) => (
    <div className={styles.prevArrow} onClick={props.onClick}>
        <FaArrowLeft />
    </div>
);

const NextArrow = (props) => (
    <div className={styles.nextArrow} onClick={props.onClick}>
        <FaArrowRight />
    </div>
);

const Carousel = ({ slides }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        adaptiveHeight: true,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
    };

   

   

    return (
        <div className={styles.carouselContainer}>
            <Slider {...settings}>
                {slides.map((slide, index) => (
                    <div key={index}>
                        <img src={slide.image} alt={slide.title} className={styles.carouselImage} />
                        {/* <h3 className={styles.carouselCaption}>{slide.title}</h3> */}
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default Carousel;
