import { Route, Routes } from "react-router-dom";

import HomePage from "page/HomePage/HomePage";
import MoviesPage from "page/MoviesSearchPage/MoviesSearchPage";
// import MoviesSearch from "./components/Movies/MoviesSearch/MoviesSearch";
import NavBar from "components/NavBar/NavBar";
import MovieDetailes from './page/MovieDetailesPage/MovieDetailesPage'
import Cast from "components/Cast/Cast";
import Reviews from "components/Reviews/Reviews";

// import NotFoundPage from "page/NotFoundPage/NotFoundPage";

export const App = () => {
  return (
    <div>
      <NavBar />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:id" element={<MovieDetailes />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews/>} />
        </Route>
        
        <Route path="*" element={ <HomePage />} />
      </Routes>
    </div>
  );
};
