import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { ToastContainer, toast} from 'react-toastify';
// import * as Scroll from 'react-scroll';
import 'react-toastify/dist/ReactToastify.css';

// import Modal from "./../../../shared/component/Modal/Modal";
import {searchMovies} from './../../shared/services/getApi';
import MoviesFindForm from "../../components/Movies/MoviesFindForm/MoviesFindForm";
// import PostFindList from "./PostFindList/PostFindList";
// import Button from "./../../shared/component/Button/Button";
// import MoviesImgModal from "./../../Movies/MoviesSearch/MoviesImgModal/MoviesImgModal";
import Loader from "./../../shared/component/Loader/Loader";
import Message from "./../../shared/component/Message/Message";

import css from "./moviesSearchPage.module.css";
import MoviesList from "./../../components/Movies/MoviesList/MoviesList";

const MoviesFind = () => {
    // const [search, setSearch] = useState("");
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    // const [page, setPage] = useState(1);
    const [searchParams, setSearchParams] = useSearchParams();
    const search = searchParams.get("query");
    const page = searchParams.get("page");


    
useEffect(() => {
        if (!search) {
            return;
        }
        const fetchMoviesSearchList = async() => {
            try {
                setLoading(true);
            const hits = await searchMovies(search.trim().toLowerCase(), page);
            setItems(() => ([...hits]))
                }
            catch (error) {
                setError(error.message);
                }
            finally {
                setLoading(false);
                }    
            }  
            fetchMoviesSearchList();
        },[search, page])

    const searchPost = (searchCurrent) => {
        const query = searchCurrent.trim().toLowerCase();
    if (query === search) {
        toast.error('Please enter another request.');
        return;
        }
        setSearchParams({ query, page: 1 });
        setItems([]);
        // setPage(1);
    }    
    
// const loadMore = () => {
//     // setPage((prevPage) => (prevPage + 1));
//     setSearchParams({ search, page: Number(page) + 1 });
    
//     scrolling();
// }

// function scrolling() {
//     const scrollPhoto = Scroll.animateScroll;
//     scrollPhoto.scrollMore(560);
//   }    
    
return (
    <>
            
            <MoviesFindForm onSubmit={searchPost} />
            {(!search || items.length === 0) && <Message message="Please enter a valid keyword to search for movies." />}
            {error && <Message message="Sorry... No results were found for this query! 
                                            Perhaps you are sending an empty request. Please enter a keyword to search." />}
            {loading && <Loader className={css.loader} />}
            <MoviesList items={items} />
            {/* {Boolean(items.length) && search !== null && <Button onClick={loadMore}>Load more...</Button>} */}
        
            <ToastContainer
                    position="top-left"
                    autoClose={3000}
                    hideProgressBar={false} 
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="colored"
            />
        </>
    )    
}
    
export default MoviesFind;