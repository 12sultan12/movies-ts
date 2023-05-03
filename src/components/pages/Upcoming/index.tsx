import React, {useEffect} from 'react';
import {useAppDispatch} from "../../../hooks/useAppDispatch";
import {useAppSelector} from "../../../hooks/useAppSelector";
import {fetchingUpcoming} from "../../../store/Reducers/ActionCreators";
import MovieCard from "../MovieCard";

const Upcoming = () => {
    const {movie, loader, error} = useAppSelector(state => state.movieSlice)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetchingUpcoming)
    }, [])
    return (
        <div className="container">
            <div className="flex flex-wrap">
                {
                    movie.map(el => <MovieCard el={el}/>)
                }
            </div>
        </div>
    );
};

export default Upcoming;