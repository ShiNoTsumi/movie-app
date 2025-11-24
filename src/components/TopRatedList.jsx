import React, { useState, useEffect } from "react";
import "./TopRatedList.css";
import MovieCard from "./MovieCard";

const TopRatedList = () => {
  //state variable
  //do this after fetchin the data
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    //custom function to get the movies from TMDB
    fetchMovies();
  });

  const fetchMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=f28918a9f9789a7157ee97c6baf4cd5e"
    );

    const data = await response.json();

    //console.log(data);

    setMovies(data.results);
  };

  return (
    <div class="movie_grid">
      <h1>Top Rated</h1>
      <ul class="cards">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
      </ul>
    </div>
  );
};

export default TopRatedList;
