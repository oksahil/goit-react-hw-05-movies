import PropTypes from 'prop-types';
import { useState, useEffect } from "react";
import { useParams, useNavigate, Link, Outlet, useLocation } from "react-router-dom";
import * as Scroll from 'react-scroll';
import 'react-toastify/dist/ReactToastify.css';

import { getMovieDetailesId } from "./../../shared/services/getApi";
import Button from "shared/component/Button/Button";
import defaultImg from "./../../Img/defaultImg.png";

import css from "./movieDetailesPage.module.css"

const MovieDetailesPage = () => {
    const [movie, setMovie] = useState();
    const { id } = useParams();
    const navigate = useNavigate();

    const location = useLocation();

    // console.log(location.state.from.search);

    const from = location.state?.from || `/movies/`;
    const goBack = () => navigate(from);
    
    const getPosterPath = (poster_path) => {
         if (poster_path === null) {
      return `${defaultImg}`;
    }    
    return `https://www.themoviedb.org/t/p/w300${poster_path}`;
}
    useEffect(()=> {
        const fetchMovieDetailes = async() => {
            try {
                const result = await getMovieDetailesId(id);
                setMovie(result);
            }
            catch({response}) {
                console.log(response.data.message);
            }
        }
        fetchMovieDetailes();
    }, [id])
function scrolling() {
    const scrollPhoto = Scroll.animateScroll;
    scrollPhoto.scrollMore(100);
  }   
    return (
        <>
        <Button className={css.btn} onClick={goBack}>Go back</Button>
        <div className={css.container}>
            
            <div key={movie?.id } className={css.item}>
               <img  className={css.boxImg} src={getPosterPath(movie?.poster_path)} alt={movie?.title}/>
            </div>
            <div className={css.item}>
                <h1 className={css.titleMovie}>{movie?.title} ({movie?.release_date.slice(0, 4)})</h1>
                <p><span className={css.secondTitleMovie}>User score:</span>{(movie?.vote_average * 10).toFixed(0)}% ({movie?.vote_count} votes)</p>
                <h2 className={css.secondTitleMovie}>Overview</h2>
                <p>{movie?.overview}</p>
                <h2 className={css.secondTitleMovie}>Genres</h2>
                    <p>{movie?.genres.map((genre) => (<li key={genre?.id} className={css.itemGenre}>{genre?.name}</li>))}</p>
            </div>
            </div>
            <div className={css.container}>
                <Link to="cast"><Button className={css.btn}>Cast</Button></Link>
                <Link to="reviews"><Button className={css.btn}>Reviews</Button></Link>
                {scrolling()}
            </div>
            <Outlet/>
            </>
    )
} 

export default MovieDetailesPage;

MovieDetailesPage.defaultProps = {
    profile_path: defaultImg,
    character: "Sorry",
    vote_average: "Sorry",
    overview: "Sorry",
    movie: [],
    genre: [],
}

MovieDetailesPage.propTypes = {
    movie: PropTypes.arrayOf(PropTypes.shape({
            profile_path: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired,
            character: PropTypes.string.isRequired,
            vote_average: PropTypes.string.isRequired,
            overview: PropTypes.string.isRequired,
            genre: PropTypes.arrayOf(PropTypes.shape({
                id: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired,
            }))
    })) 
};