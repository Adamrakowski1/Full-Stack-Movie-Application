import './Hero.css'
import {Paper} from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import {Link, useNavigate} from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const Hero = ({movies}) => {
    const navigate = useNavigate();

    function reviews(movieId) {
        navigate(`/Reviews/${movieId}`);
    }


    return(
        <div className='movie-carousel-container'>
            <Swiper
                modules={[Navigation, Pagination, Autoplay, A11y]}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={Array.isArray(movies) && movies.length > 1}
            >
                {(movies || []).map((movie, index) => (
                    <SwiperSlide key={`movie-${index}-${movie?.id || movie?.imdbId || 'unknown'}`}>
                        <Paper>
                            <div className='movie-card-container'>
                                <div className='movie-card' style={{"--img": `url(${movie.backdrops?.[0] || movie.backdrop})`}}>
                                    <div className='movie-detail'>
                                        <div className='movie-poster'>
                                            <img src={movie.poster} alt=""/>
                                        </div>
                                        <div className='movie-title'>
                                            <h4>{movie.title}</h4>
                                        </div>
                                        <div className='movie-buttons-container'>
                                            <Link to={`/Trailer/${movie.trailerLink.substring(movie.trailerLink.length - 11)}`}>
                                            <div className='play-button-icon-container'>
                                                <FontAwesomeIcon className='play-button-icon'
                                                icon = {faCirclePlay}/>
                                            </div>
                                            </Link>
                                            <div className='movie-review-button-container'>
                                                <Button variant='info' onClick={() => reviews(movie.imdbId)}>Reviews</Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Paper>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Hero;