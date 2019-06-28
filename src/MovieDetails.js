import React, {Component}  from 'react';
import axios from 'axios';

class MovieDetails extends Component{
    constructor(){
        super()
        this.state = {
            movie: {}
        }
    }
    componentDidMount(){
        axios({
            url: `https://api.themoviedb.org/3/movie/${this.props.match.params.movieId}`,
            params: {
                api_key: `7006d7d489916ff7f144e1f553508fea`,
                language: `en-US`,
                sort_by: `popularity.desc`,
                include_adult: `false`,
                include_video: `false`,
                page: 1,
                primary_release_year: 2019
            }
        }).then((result)=>{
            this.setState({
                movie: result.data
            })
        })
    }
    render(){
        return(
            <div className="single-movie">
                <div className="single-movie-description">
                    <h1>{this.state.movie.title}</h1>
                    <h2>{this.state.movie.tagline}</h2>
                    <p>{this.state.movie.overview}</p>
                </div>
                <div className="single-movie-poster">
                    <img src={`http://image.tmdb.org/t/p/w500/${this.state.movie.poster_path}`} alt=""/>
                </div>
            </div>

        )
    }
}

export default MovieDetails;