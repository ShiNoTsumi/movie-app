import React from "react";
import "./MovieCard.css";


const MovieCard = ({ movie, genres }) => {

  return (
<li class="card">  
<div class="movie-card">
  <div class="movie-img-container">
    <div class="movie-img"><img src= {`${"https://image.tmdb.org/t/p/w500/"}${movie.poster_path}`} alt="" /></div>
    <div class="movie-overlay"></div>
  </div>
  <div class="movie-content">
    <div class="title-row">
      <h1 class="movie-title">{movie.title}</h1>
      <span class="rating-badge"></span>
    </div>

    <div class="year-badge">{movie.release_date}</div>

    <div class="genres">
      <span class="genre-tag"></span>
    </div>

    <div class="ratings-row">
      <div class="star-rating">
        <div class="stars">
          <p>Rating :</p>
        </div>
        <span class="rating-text">{movie.vote_average}</span>
      </div>

      <div class="likes">
        <p>Votes:</p>
        <span class="likes-count">{movie.vote_count}</span>
      </div>
    </div>

    <div class="description-section">
      <h5 class="section-title">SUMMARY</h5>
      <p class="movie-description" id="description">
        {movie.overview.slice(0, 150) + "..."}
      </p>
    </div>
  </div>
</div>
</li>  
  );
};

export default MovieCard;
