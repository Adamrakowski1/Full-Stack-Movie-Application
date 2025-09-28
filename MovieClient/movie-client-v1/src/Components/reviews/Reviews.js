import {useEffect, useRef} from 'react';
import api from '../../api/AxiosConfig';
import {useParams} from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap';
import ReviewForm from '../reviewForm/ReviewForm';

import React from 'react';

const Reviews = ({getMovieData, movie, reviews, setReviews}) => {

    const revText = useRef();
    let params = useParams();
    const movieId = params.movieId;

    useEffect(()=> {
        getMovieData(movieId);
    },[])

    const addReview = async (e) => {
        e.preventDefault();

        const rev = revText.current;
        
        // Check if review text is not empty
        if (!rev.value.trim()) {
            alert("Please enter a review before submitting.");
            return;
        }
        
        try {
            console.log("Submitting review:", rev.value);
            console.log("Current reviews:", reviews);

            const response = await api.post("/api/v1/reviews", { reviewBody: rev.value, imdbId: movieId });
            console.log("API response:", response.data);

            const updatedReviews = [...(reviews || []), {body: rev.value}];
            console.log("Updated reviews:", updatedReviews);

            rev.value = "";
            setReviews(updatedReviews);
        }
        catch(err)
        {
            console.error("Error submitting review:", err);
            
            // If API call fails, still add the review locally for testing
            if (err.code === 'ERR_NETWORK' || err.message.includes('CORS')) {
                console.log("API call failed due to CORS/network issue. Adding review locally for testing.");
                const updatedReviews = [...(reviews || []), {body: rev.value}];
                rev.value = "";
                setReviews(updatedReviews);
                alert("Review added locally (backend connection failed due to CORS policy)");
            } else {
                alert("Failed to submit review. Please try again.");
            }
        }
    }

    return (
        <Container>
            <Row>
                <Col><h3>Reviews</h3></Col>
            </Row>
            <Row className='mt-2'>
                <Col>
                    <img src={movie?.poster} alt=''/>
                </Col>
                <Col>
                    {
                        <>
                            <Row>
                                <Col>
                                    <ReviewForm handleSubmit={addReview} revText={revText} labelText='Write a Review?'/>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <hr />
                                </Col>
                            </Row>
                        </>
                    }
                    {
                        (reviews && reviews.length > 0) ? reviews.map((r, index) => {
                            return(
                                <React.Fragment key={index}>
                                    <Row>
                                        <Col>{r.body}</Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <hr />
                                        </Col>
                                    </Row>
                                </React.Fragment>
                            )
                        }) : (
                            <Row>
                                <Col>No reviews yet. Be the first to review this movie!</Col>
                            </Row>
                        )
                    }
                </Col>
            </Row>
            <Row>
                <Col>
                    <hr />
                </Col>
            </Row>
        </Container>
    )
}

export default Reviews