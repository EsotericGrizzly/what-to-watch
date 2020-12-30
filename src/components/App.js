import React, { useState } from 'react';
import SearchBar from './mainpage/SearchBar/SearchBar';
import ContentCard from './mainpage/ContentCard/ContentCard';
import MovieDetails from './mainpage/MovieDetails/MovieDetails';
import ShakaPlayer from './ShakaPlayer/ShakaPlayer';
import './App.css';

function App() {
  const [search, setSearch] = useState();
  const [play, setPlay] = useState();
  const [movieDetails, setMovieDetails] = useState();
  
  // The api key would normally be requested from backend server for security.
  const api_key = "87a4b219a54dbd58a0b55ee8de87aab6";

  if (play) {
    return <ShakaPlayer setPlay={setPlay} movieDetails={movieDetails}/>;
  }
  return (
    <div className="App">
      <h1 className="main-title">What <span>to</span> Watch</h1>
      <SearchBar setSearch={setSearch} />
      {movieDetails && <MovieDetails
        setPlay={setPlay}
        movieDetails={movieDetails}
        setMovieDetails={setMovieDetails}
        />
      }
      {search && <ContentCard 
      CategoryName={"Search Results"}
      url={`https://api.themoviedb.org/3/search/multi/?api_key=${api_key}&query=${search}`}
      setMovieDetails={setMovieDetails}
      />}
      <ContentCard 
        CategoryName={"Popular Movies"}
        url={`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`}
        setMovieDetails={setMovieDetails}
      />
      <ContentCard
        // setMovieDetails={setMovieDetails}
        CategoryName={"Popular Tv Shows"}
        url={`https://api.themoviedb.org/3/tv/popular?api_key=${api_key}`}
        setMovieDetails={setMovieDetails}
      />
      <ContentCard 
        CategoryName={"Documentary"}
        url={`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=99&sort_by=vote_count.desc`}
        setMovieDetails={setMovieDetails}
      />
      <ContentCard 
        CategoryName={"Family"}
        url={`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=10751&sort_by=vote_count.desc`}
        setMovieDetails={setMovieDetails}
      />      
    </div>
  );
}

export default App;
