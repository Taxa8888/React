import React, { ReactElement, useEffect } from 'react';
import { MAIN_PROJECT_TITLE } from '../app/app.constants';
import { HEADER_BG_IMAGE } from '../header/header.constants';
import { Button } from '../button/button';
import './headerdescription.style.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getMovieById } from '../../store/movies/movies.actions';
import { selectChosenMovie, selectIsLoading } from '../../store/movies/movies.selectors';
import { MovieImage } from '../movieImage/movieImage';
import { Link, useParams } from 'react-router-dom';
import { Loading } from '../loading/loading';

export const HeaderDescription = (): ReactElement => {
    const isLoading = useSelector(selectIsLoading);
    const params = useParams();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMovieById(1));
    }, [dispatch, params]);

    const chosenMovie = useSelector(selectChosenMovie);

    if (!isLoading) {
        return <Loading type="bars" color="#000000"></Loading>;
    } else {
        return (
            <div className="headerDescription" style={HEADER_BG_IMAGE}>
                <div className="headerDescriptionContainer">
                    <div className="navElements">
                        <p className="headerDescriptionTitle">{MAIN_PROJECT_TITLE}</p>
                        <Link to="/">
                            <Button
                                onClick={() => <Link to="/"></Link>}
                                className="button"
                                style={{ marginLeft: '40rem' }}
                            >
                                SEARCH
                            </Button>
                        </Link>
                    </div>
                    <div className="fimlDescription">
                        <MovieImage
                            title={chosenMovie.title}
                            posterPath={chosenMovie.posterPath}
                            className="descriptionMovieImg"
                        />
                        <div className="aboutFilm">
                            <p className="filmTitle">{chosenMovie.title}</p>
                            <span className="filmDate">{chosenMovie.releaseDate.slice(0, 4)}</span>
                            <span className="filmTime">{`${chosenMovie.runtime} min`}</span>
                            <p className="filmOverview">{chosenMovie.overview}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};
