import React, {Component} from 'react';
import {Poster} from './Movie'
import  styled  from 'styled-components';
import Overdrive from 'react-overdrive'
const POSTER_PATH = 'http://image.tmdb.org/t/p/w154'
const BACKDROP_PATH = 'http://image.tmdb.org/t/p/w1280'


class MovieDetail extends Component {
    state = {
        movie:{}
    }
    async componentDidMount() {
        try {
const res = await fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=8cd945aaad46d8eb9a6c218f6a289ec5&language=en-US`)
            const movie = await res.json();
            this.setState({movie})
        } catch (e) {
            console.log(e)
        }
    }
    render() {
        const {movie} = this.state
        return (
       <MovieWrapper backdrop= {`${BACKDROP_PATH}${movie.backdrop_path}`}>  

       <MovieInfo>
       <Overdrive id={movie.id}>
       <Poster  src={`${POSTER_PATH}${movie.poster_path}`}alt={movie.title}/>  
       </Overdrive> 
       <div>   
       <h3>{movie.title}</h3>
       <h4>{movie.release_date}</h4>
       <p>{movie.overview}</p>
       </div> 
       </MovieInfo>  
       </MovieWrapper>
        )}}


export default MovieDetail;

const MovieWrapper = styled.div`
position:relative;
padding-top:50vh;
background-size:cover;
background:url(${props=>props.backdrop}) no-repeat;
`;

const MovieInfo = styled.div`
display:flex;
background:white;
text-align:left;
padding:2rem 10%;

> div {
    padding-left:20px;
}
img{
    position:relative;
    top:-5rem;
}

`;