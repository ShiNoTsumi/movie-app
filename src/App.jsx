import { Route, Routes } from "react-router-dom";
import "./App.css";
import CandyList from "./components/CandyList.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./components/Home.jsx";
import PopularList from "./components/PopularList";
import TopRatedList from "./components/TopRatedList";

function App() {
  const name = "Delane Kane";

  return (
    <>
      <Navbar />
      <header class="header">
	      <div class="brand-box">
		    <span class="brand"><b>Made By:</b> {name}</span>
	      </div>
	
	      <div class="text-box">
		      <h1 class="heading-primary">
			    <span class="heading-primary-main">Cinematic Insights</span>
			    <span class="heading-primary-sub">Discover Movies</span>
		      </h1>
	      </div>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Candy" element={<CandyList />} />
          <Route path="/Popular" element={<PopularList />} />
          <Route path="/TopRated" element={<TopRatedList />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
