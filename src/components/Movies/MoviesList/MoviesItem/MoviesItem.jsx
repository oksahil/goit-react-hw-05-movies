import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

import css from "./../moviesList.module.css";

function MoviesItem({ id, original_title}) {

  return (
        <>
            <li key={id} className={css.item}>
                  <Link to={`/movies/${id}`} className={css.text}>{original_title}</Link>
            </li>
          
        </>
    );
}

export default MoviesItem;

MoviesItem.propTypes = {
  original_title: PropTypes.string,
  id: PropTypes.number.isRequired,
};