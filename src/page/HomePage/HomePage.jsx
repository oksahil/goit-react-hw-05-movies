// import MoviesHome from "../../components/Movies/MoviesHome";



// const HomePage = () => {
//     return (
//         <>
//             <h1 className={css.titleMovie}>Trending today</h1>
//             <MoviesHome />
//         </>
//     )
// }

// export default HomePage;

import { useState, useEffect } from "react";


import {getMoviesList} from '../../shared/services/getApi';
import MoviesList from "./../../components/Movies/MoviesList/MoviesList";

// import MoviesSearch from "./../Movies/MoviesSearch/MoviesSearch";
import Loader from "../../shared/component/Loader/Loader";
import Message from "../../shared/component/Message/Message";
// import Button from "shared/component/Button/Button";

import css from "./homePage.module.css";
// import css from "./../../components/Movies/movies.module.css";
// import MoviesDetailes from "page/MovieDetailesPage/MovieDetailesPage";

const GetMovies = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

useEffect(() => {
        const fetchMoviesList = async() => {
            try {
                setLoading(true);
            const hits = await getMoviesList();
            setItems(() => ([...hits]))
                }
            catch (error) {
                setError(error.message);
                }
            finally {
                setLoading(false);
                }    
            }  
            fetchMoviesList();
}, []) 
    

return (
        <>
            {error && <Message message="Sorry... No results were found for this query! 
                                            Perhaps you are sending an empty request. Please enter a keyword to search." />}
        {loading && <Loader className={css.loader} />}
        <h1 className={css.titleMovie}>Trending today</h1>
        <MoviesList items={items} />
        
        

        </>
    )    
}
    
export default GetMovies;