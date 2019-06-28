import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Catalogue extends Component{
    constructor() {
        super()
        this.state = {
            movies: []
        }
    }
    componentDidMount() {
        axios({
            url: `https://api.themoviedb.org/3/discover/movie`,
            params: {
                api_key: `7006d7d489916ff7f144e1f553508fea`,
                language: `en-US`,
                sort_by: `popularity.desc`,
                include_adult: `false`,
                include_video: `false`,
                page: 1,
                primary_release_year: 2018
            }
        }).then((result) => {
            console.log(result.data.results)
            const movies = result.data.results;
            this.setState({ movies })
        })
    }
    render(){
        return(
            <div className="movie-catalogue">
                {this.state.movies.map((movie) => {
                    return (
                        <div className="movie-poster" key={movie.id}>
                            <Link to={`/movies/${movie.id}`}>
                                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                            </Link>
                        </div>
                    )
                    })
                }
            </div>
        )
    }
}


export default Catalogue;