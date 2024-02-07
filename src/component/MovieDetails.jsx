import { useEffect, useState } from 'react'
import Container from "react-bootstrap/esm/Container"
import Row from "react-bootstrap/esm/Row"
import Col from "react-bootstrap/esm/Col"
import { useParams } from 'react-router-dom'

const MovieDetails = () => {
    const params = useParams()

    const [movieDetail, setMovieDetail] = useState(null)
    const [movieComments, setMovieComments] = useState([])

    useEffect(() => {
        getDetails()
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

    return (
        <Container>
            <Row>
                <Col>
                <div>
                    <img src={movieDetail.Poster} alt={movieDetail.Title}></img>
                    <h5>{movieDetail.Title}</h5>
                    <p>{movieDetail.Type} - {movieDetail.Year}</p>
                </div>
                </Col>
            </Row>
        </Container>
    )
}

export default MovieDetails