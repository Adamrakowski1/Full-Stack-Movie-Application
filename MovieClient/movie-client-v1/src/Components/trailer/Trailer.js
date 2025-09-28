import {useParams} from 'react-router-dom';
import ReactPlayer from 'react-player';
import './Trailer.css';
import React from 'react';

const Trailer = () => {

        let params = useParams();
        const key = params.ytTrailerId;
        
    return (
        <div className='react-player-container'>
            {key ? (
                <iframe 
                    width="100%" 
                    height="500px"
                    src={`https://www.youtube.com/embed/${key}?autoplay=1`}
                    title="Movie Trailer"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            ) : (
                <div>No trailer ID provided</div>
            )}
        </div>
    )
}

export default Trailer