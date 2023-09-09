import './App.css';
import React from 'react';
import Header from './Components/Header';
import Hero from './Components/Hero';
import MovieList from './Components/MovieList';
import Footer from './Components/Footer';

function App() {
  const topMoviesURL = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';
  const popularMoviesURL = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';


  return (
    <div className="App">
      <Header />
      <Hero />
      <MovieList title="Top Rated Movies" url={topMoviesURL} />
      <MovieList title="Popular Movies" url={popularMoviesURL} />
      <Footer />
    </div>
  );
}

export default App;
