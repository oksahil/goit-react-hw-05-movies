import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

import Loader from "shared/component/Loader/Loader";
import NavBar from "components/NavBar/NavBar";

const HomePage  = lazy(() => import ("page/HomePage/HomePage")) ;
const MovieDetailes = lazy(() => import("./page/MovieDetailesPage/MovieDetailesPage"));
const MoviesPage = lazy(() => import("./page/MoviesSearchPage/MoviesSearchPage"));
const Cast = lazy(() => import ("components/Cast/Cast"));
const Reviews   = lazy(() => import ("components/Reviews/Reviews"));

export const App = () => {
  return (
    <div>
      <NavBar />
      <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:id" element={<MovieDetailes />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews/>} />
        </Route>
        
        <Route path="*" element={ <HomePage />} />
        </Routes>
        </Suspense>
    </div>
  );
};
