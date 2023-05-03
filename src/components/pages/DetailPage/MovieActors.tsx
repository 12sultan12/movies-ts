import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useAppDispatch} from "../../../hooks/useAppDispatch";
import {useAppSelector} from "../../../hooks/useAppSelector";
import {fetchingActorsDetail} from "../../../store/Reducers/ActionCreators";


const
    MovieActors = () => {
        const [viewMore, setViewMore] = useState<number>(400)
        const {ActorsId} = useParams()
        const dispatch = useAppDispatch()
        const {actor, loader, error} = useAppSelector(state => state.detailActorsSlice)

        console.log(actor)
        const toggleViewMore = (text: any) => {
            setViewMore(viewMore === 400 ? text.length : 400)
        }
        useEffect(() => {
            dispatch(fetchingActorsDetail(ActorsId))
        }, [])
        return (
            <div id="detail-cast">
                <div className="container">
                    <div className="detail-cast">
                        <div>
                            <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${actor.profile_path}`}
                                 alt=""/>
                        </div>
                        <div className="detail-cast--desc">
                            <h1>{actor.name}</h1>
                            <h3>{actor.place_of_birth}</h3>
                            <p>{actor.biography ? actor.biography.slice(0, viewMore) : actor.biography}</p>
                            {
                                actor.biography ? actor.biography.length >= 400 ? <span onClick={() =>
                                    toggleViewMore(actor.biography)} style={{color: "blue", cursor: "grab"}}>
                              {viewMore === 400 ? 'Читать дальше..' : 'Свернуть'}</span> : "" : ""
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    };

export default MovieActors;