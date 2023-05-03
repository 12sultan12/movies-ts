import React from 'react';
import {IMovieInterfaces} from "../../../types/MovieInterfaces";
import {NavLink} from "react-router-dom";

interface IMovieCard {
    el: IMovieInterfaces
}

const MovieCard = ({el}:IMovieCard) => {
    return (
        <div className="basis-1/5 mx-5 my-5">
            <NavLink to={`/movie-detail/${el.id}`}>
                <img src={`https://image.tmdb.org/t/p/w220_and_h330_face${el.poster_path}`} alt=""/>
            </NavLink>
        </div>
    );
};

export default MovieCard;