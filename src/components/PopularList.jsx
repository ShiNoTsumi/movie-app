import React, { useState, useEffect } from "react";
import "./PopularList.css";
import MovieCard from "./MovieCard";

const PopularList = () => {
  //state variable
  //do this after fetchin the data
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    //custom function to get the movies from TMDB
    fetchMovies();
  });
  
  const fetchMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=f28918a9f9789a7157ee97c6baf4cd5e"
    );

    const data = await response.json();

    console.log(data);

    setMovies(data.results);
  };

  return (
    <div className="movie_grid">
      <h1>Popular</h1>
      <ul class="cards">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
      </ul>
    </div>
  );
};

export default PopularList;
