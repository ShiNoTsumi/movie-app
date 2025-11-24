import React from "react";
import "./MovieCard.css";

const MovieCard = ({ movie, genres }) => {
  const genresList = [
    { id: 28, name: "Action" },
    { id: 12, name: "Adventure" },
    { id: 16, name: "Animation" },
    { id: 35, name: "Comedy" },
    { id: 80, name: "Crime" },
    { id: 99, name: "Documentary" },
    { id: 18, name: "Drama" },
    { id: 10751, name: "Family" },
    { id: 14, name: "Fantasy" },
    { id: 36, name: "History" },
    { id: 27, name: "Horror" },
    { id: 10402, name: "Music" },
    { id: 9648, name: "Mystery" },
    { id: 10749, name: "Romance" },
    { id: 878, name: "Science Fiction" },
    { id: 10770, name: "TV Movie" },
    { id: 53, name: "Thriller" },
    { id: 10752, name: "War" },
    { id: 37, name: "Western" },
  ];

  return (
    <li class="card">
      <div class="movie-card">
        <div class="movie-img-container">
          <div class="movie-img">
            <img
              src={`${"https://image.tmdb.org/t/p/w500/"}${movie.poster_path}`}
              alt=""
            />
          </div>
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
