import { useEffect, useState } from 'react'
import Container from "react-bootstrap/esm/Container"
import Row from "react-bootstrap/esm/Row"
import Col from "react-bootstrap/esm/Col"
import { useParams } from 'react-router-dom'
import { ListGroup } from 'react-bootstrap'

const MovieDetails = () => {
    const params = useParams()

    const [movieDetail, setMovieDetail] = useState([])
    const [movieComments, setMovieComments] = useState([])

    useEffect(() => {
        getDetails()
        getComments()
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])

    const getDetails = () => {
        fetch('https://www.omdbapi.com/?apikey=421212b&i='+ params.movieId)
        .then((response)=> {
            if(response.ok) {
                return response.json()
            } else {
                throw new Error("errore nel recupero dettagli dei film")
            }
        })
        .then((movieDetail)=> {
            console.log('dettagli film:', movieDetail)
            setMovieDetail(movieDetail)
        })
        .catch((err)=> {
            console.log("Errore: ", err)
        })
    }

    const getComments = () => {
        fetch('https://striveschool-api.herokuapp.com/api/comments/' + params.movieId, {
            headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWJiYTBmYTViMjYxNTAwMTk4YTY5NTAiLCJpYXQiOjE3MDY3OTUyNTgsImV4cCI6MTcwODAwNDg1OH0.OS7BwSmuBObJTi9NSJxWK9rNr_h9PJfVgKz_DxNbgM0",
              },
        })
        .then((response)=> {
            if(response.ok) {
                return response.json()
            } else {
                throw new Error ('errore nel recupero commenti film')
            }
        })
        .then((movieComments) => {
            console.log('Commenti: ', movieComments)
            setMovieComments(movieComments)
        })
    }

    return (
        <Container className='mt-4'>
            <Row>
                <Col>
                <div>
                    <img src={movieDetail.Poster} alt={movieDetail.Title}></img>
                    <h5>{movieDetail.Title}</h5>
                    <p>{movieDetail.Type} - {movieDetail.Year}</p>
                    <ListGroup>
                        {movieComments.map((comment) => (
                        <ListGroup.Item key={comment._id}>
                            {comment.rate} - {comment.comment}
                        </ListGroup.Item>
                        ))}
                    </ListGroup>
                </div>
                </Col>
            </Row>
        </Container>
    )
}

export default MovieDetails