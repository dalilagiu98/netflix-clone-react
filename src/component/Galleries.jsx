import { Component } from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Alert from "react-bootstrap/Alert";
import Spinner from "react-bootstrap/Spinner"
import ItemGallery from "./ItemGallery";
class Galleries extends Component {

    state= {
        movies: [],
        isLoading: true,
        isError: false,
    }

    fetchMovies() {
        fetch(`https://www.omdbapi.com/?apikey=421212b&s=${this.props.title}`)
        .then((response)=> {
            if(response.ok) {
                return response.json()
            } else {
                throw new Error ('errore nella ricezione del server')
            }
        })
        .then((data)=> {
            console.log("l'oggetto ottenuto è:", data.Search)
            this.setState({
                movies: data.Search,
                isLoading: false,
            })
        })
        .catch((err)=> {
            console.log(err)
            this.setState({
                isLoading: false,
                isError: true
            })
        })
    }

    componentDidMount(){
        this.fetchMovies()
    }
    render() {
        return (
            <Container fluid>
                <Row className="gy-3">
                {this.state.isLoading && (
                    <Spinner animation="border" variant="danger" className="ms-auto me-auto "></Spinner>
                )}
                {this.state.movies === undefined && this.state.isLoading === false && this.state.isError === false ? (<Alert variant="dark">Nessun film trovato</Alert>) : (<ItemGallery movies={this.state.movies}/>)}
                   
                </Row>
            </Container>
        )
    }
}

export default Galleries