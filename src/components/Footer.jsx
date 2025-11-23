import React from "react";
import "./Footer.css";
import tmdbLogo from "../assets/tmdb.svg";

const footer = () => {

  return (
    <footer>
      <div class="footer_content">
       <img src={tmdbLogo} alt="" />
       <p>Cinematic Insights. A coding project made by Delane Kane. Using Api Film Data from <a target="blank" href="https://www.themoviedb.org">TMDB</a></p>
       </div>
    </footer>
  );
};

export default footer;
