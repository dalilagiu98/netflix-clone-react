import { Component } from "react";
import Col from "react-bootstrap/Col"
class ItemGallery extends Component {
    render() {
        return (
            <>
            {
                this.props.movies.slice(0, 6).map((movie)=> {
                    console.log("il film è:", movie)
                    return (   
                        <Col xs={6} md={3} lg={2} key={movie.imdbID}>
                            <div className="w-100 h-100">
                                <img src={movie.Poster} alt="poster movie" className="w-100 h-100"/>
                            </div>                                   

                        </Col>
                    )
                })
            }
            </>
        )
    }
}

export default ItemGallery