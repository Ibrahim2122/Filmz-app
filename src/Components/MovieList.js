import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import './MovieList.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { responsive } from "./data/responsive";

const MovieList = (props) => {
  

    const [movieList, setMovieList] = useState([]);
    const fetch = require('node-fetch');
    const url = props.url;

  
    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZmFmYzZmNmM5N2U2YzMxNGRjODA5M2U1N2NjMzlkZSIsInN1YiI6IjY0ZWUzNWZiMmQzNzIxMDEzOWI0YzNkYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rVLo88kVdU-bYWiD1zFBYKtlyg1hFToeEbXROBDO-rs'
            }
        };

        fetch(url, options)
          .then(res => res.json())
          .then(json => setMovieList(json['results']))
          .catch(err => console.error('error:' + err));
      }, [fetch, url])

    return (
      <section>
        <h1 className="title">{props.title}</h1>
        <Carousel responsive={responsive}>
          {movieList.map(movie => {
            const url = 'https://image.tmdb.org/t/p/original' + movie['poster_path'];
            return (
              <MovieCard year={movie['release_date']} poster={url} rating={movie['vote_average']} title={movie.title}/>
            )
          })}
        </Carousel>
      </section>
    )
}

export default MovieList;