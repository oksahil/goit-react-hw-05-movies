import PropTypes from 'prop-types';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as Scroll from 'react-scroll';

import 'react-toastify/dist/ReactToastify.css';
import { getMovieReviewsId } from "./../../shared/services/getApi";
import Loader from "shared/component/Loader/Loader";
import Message from "shared/component/Message/Message";
import Button from "shared/component/Button/Button";

import css from "./reviews.module.css";

const Reviews = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const {id} = useParams();



    useEffect(()=> {
        const fetchReviews = async() => {
            try {
                setLoading(true);
                const result = await getMovieReviewsId(id);
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

        fetchReviews();
    }, [id, setItems]);

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
            {error && <Message message="Sorry...error..." />}
            {loading && <Loader className={css.loader} />}

            <ul className={css.list}>
                {items.length > 0 ? (items.map(({ id, author, content }) =>
                    
                    <li key={id}>
                  
                        <div className={css.container}>
                        <p className={css.text}><span className={css.secondTitleMovie}>Author:</span> {author}</p>
                        <p>{content}</p>
                        </div>
                     
                    </li>)) :
                    (<Message message="Sorry...Sorry...Sorry, no reviews for this film!" />)
                }            
                {items.length !== 0 && <Button className={css.btn} onClick={scrollingUp}>UP</Button>}
            </ul>
    </>
    )
}

export default Reviews;

Reviews.defaultProps = {
  items: [],
}

Reviews.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        author: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        content: PropTypes.string.isRequired,       
    }))
}