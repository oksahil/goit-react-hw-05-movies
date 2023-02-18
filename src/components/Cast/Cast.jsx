import {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import * as Scroll from 'react-scroll';

import { getMovieCastId } from "./../../shared/services/getApi";
import defaultImg from "./../../Img/defaultImg.png";

import Message from "shared/component/Message/Message";
import Loader from "shared/component/Loader/Loader";
import Button from "shared/component/Button/Button";

import css from "./cast.module.css"

const Cast = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const {id} = useParams();

    useEffect(()=> {
        const fetchCast = async() => {
            try {
                setLoading(true);
                const result = await getMovieCastId(id);
                setItems(result);
                scrollingStart();
                
            }
            catch (error) {
                setError(error.message);
                }
            finally {
                setLoading(false);
                } 
        }

        fetchCast();
    }, [id, setItems]);

const getPosterPath = (poster_path) => {
    return `https://www.themoviedb.org/t/p/w200${poster_path}`;
}

function scrollingStart() {
    const scrollPhoto = Scroll.animateScroll;
    scrollPhoto.scrollMore(500);
  }  
function scrollingUp() {
    const scrollPost = Scroll.animateScroll;
    scrollPost.scrollToTop();
  }  
    
    return (
    <>
        {error && <Message message="Sorry..." />}
        {loading && <Loader className={css.loader} />}
        <ul className={css.container}>
        {items.map(({id, original_name, profile_path=defaultImg, character}) => 
                <li key={id} className={css.itemContainer}>
                <img className={css.boxImg} src={getPosterPath(profile_path)} alt={original_name} />
                <div className={css.text}><span className={css.secondTitleMovie}>Name:</span> {original_name}</div>
                <div className={css.text}><span className={css.secondTitleMovie}>Character:</span> {character}</div>
                </li>
        )}
         
            </ul>
            {items.length !== 0 && <Button className={css.btn} onClick={scrollingUp}>UP</Button>}
    </>
    )
}

export default Cast;

Cast.defaultProps = {
  profile_path: defaultImg,
  character: "Sorry",
}