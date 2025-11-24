import React from "react";
import "./MovieCard.css";

const MovieCard = ({ movie }) => {
  const genresList =[
  {"id":28,"name":"Action"},
  {"id":12,"name":"Adventure"},
  {"id":16,"name":"Animation"},
  {"id":35,"name":"Comedy"},
  {"id":80,"name":"Crime"},
  {"id":99,"name":"Documentary"},
  {"id":18,"name":"Drama"},
  {"id":10751,"name":"Family"},
  {"id":14,"name":"Fantasy"},
  {"id":36,"name":"History"},
  {"id":27,"name":"Horror"},
  {"id":10402,"name":"Music"},
  {"id":9648,"name":"Mystery"},
  {"id":10749,"name":"Romance"},
  {"id":878,"name":"Science Fiction"},
  {"id":10770,"name":"TV Movie"},
  {"id":53,"name":"Thriller"},
  {"id":10752,"name":"War"},
  {"id":37,"name":"Western"}];


  let movieGenreResults="";

  //console.log(movie.genre_ids[0]);
  
  if(movie.genre_ids[0]!==undefined){
    movieGenreResults= genresList.find(genre => genre.id === movie.genre_ids[0]);
  }else{
    movieGenreResults=  {"id":9999,"name":"Not Listed"}
  }


  return (
    <li className="card">
      <div className="movie-card">
        <div className="movie-img-container">
          <div className="movie-img">
            <img
              src={`${"https://image.tmdb.org/t/p/w500/"}${movie.poster_path}`}
              alt=""
            />
          </div>
          <div className="movie-overlay"></div>
        </div>
        <div className="movie-content">
          <div className="title-row">
            <h1 className="movie-title">{movie.title}</h1>
            <span className="rating-badge"></span>
          </div>

          <div className="year-badge">{movie.release_date}</div>

          <div className="genres">
              <span class="genre-tag">{movieGenreResults.name}</span>
          </div>

          <div className="ratings-row">
            <div className="star-rating">
              <div className="stars">
                <p>Rating :</p>
              </div>
              <span className="rating-text">{movie.vote_average}</span>
            </div>

            <div className="likes">
              <p>Votes:</p>
              <span className="likes-count">{movie.vote_count}</span>
            </div>
          </div>

          <div className="description-section">
            <h5 className="section-title">SUMMARY</h5>
            <p className="movie-description" id="description">
              {movie.overview.slice(0, 150) + "..."}
            </p>
          </div>
        </div>
      </div>
    </li>
  );
};

export default MovieCard;
