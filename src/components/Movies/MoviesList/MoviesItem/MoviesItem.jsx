import PropTypes from 'prop-types';
import { Link, useLocation } from "react-router-dom";

import css from "./../moviesList.module.css";

function MoviesItem({ id, original_title}) {
  const location = useLocation();
  return (
        <>
            <li key={id} className={css.item}>
                  <Link to={`/movies/${id}`} state = {{from: location}} className={css.text}>{original_title}</Link>
            </li>
          
        </>
    );
}

export default MoviesItem;

MoviesItem.propTypes = {
  original_title: PropTypes.string,
  id: PropTypes.number.isRequired,
};