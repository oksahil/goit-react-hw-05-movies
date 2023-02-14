import { Route, Routes } from "react-router-dom";

import HomePage from "page/HomePage/HomePage";
import MoviesPage from "page/MoviesPage/MoviesPage";
import NavBar from "components/NavBar/NavBar";
// import NotFoundPage from "page/NotFoundPage/NotFoundPage";

export const App = () => {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="*" element={ <HomePage />} />
      </Routes>
    </div>
  );
};
