import React, {useEffect} from 'react';
import {useAppSelector} from "../../../hooks/useAppSelector";
import {useAppDispatch} from "../../../hooks/useAppDispatch";
import {fetchingPopulars} from "../../../store/Reducers/ActionCreators";
import MovieCard from "../MovieCard";

const Popular = () => {
    const {movie, loader, error} = useAppSelector(state => state.movieSlice)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetchingPopulars)
    }, [])

    return (
        <div className="container">
            {error && <p>Err..</p>}
          <div className="flex flex-wrap">
              {
                  movie.map(el => <MovieCard el={el}/>)
              }
          </div>
        </div>
    );
};

export default Popular;