
import PropTypes from 'prop-types';
// import { Link } from "react-router-dom";

import MoviesItem from "./MoviesItem/MoviesItem";


// import Button from 'shared/component/Button/Button';

import css from "./moviesList.module.css"


const MoviesList = ({items}) => {

    return (
        <>
            <ul className={css.container}>
                
            {items.map(({id, original_title}) => (
                <MoviesItem id={id} key={id} original_title={original_title} /> 
            ))}
            </ul>
          
            </>
    )
}

export default MoviesList;

MoviesList.defaultProps = {
    items: []
}
 
MoviesList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({

        
   })) 
};