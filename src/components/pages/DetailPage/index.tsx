import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";

import {useAppDispatch} from "../../../hooks/useAppDispatch";
import {useAppSelector} from "../../../hooks/useAppSelector";
import Actors from "./Actors";
import {fetchingActors, fetchingDetailPages} from "../../../store/Reducers/ActionCreators";

const DetailPage = () => {
    const {movieId} = useParams()
    const dispatch = useAppDispatch()
    const {detail, error, loader} = useAppSelector(state => state.detailSlice)
    const {actors} = useAppSelector(state => state.actorsSlice)


    useEffect(() => {
        dispatch(fetchingDetailPages(movieId))
        dispatch(fetchingActors(movieId))
    }, [])

    return (
        <>
            {loader && <p>Loading..</p>}
            {error && <p>Err..</p>}
            <div id="detail-card" style={{
                background: `url("https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${detail.backdrop_path}") no-repeat left/cover`,
                height: '100vh'
            }}>
                <div className="container">
                    <div className="detail-card">
                        <img className="images"
                             src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${detail.poster_path}`} style={
                            {width: '450px', height: '550px', objectFit: 'contain'}}
                             alt=""/>
                        <div className="detail-card--description">
                            <h2>{detail.title} ({detail.release_date ? detail.release_date.slice(0, 4) : ""})</h2>
                            <p>{detail.title}</p>
                            <p>{detail.overview}</p>
                            <div className="vote">
                                <h3>
                                    {detail.vote_average}
                                    {/*{Math.round(detail.vote_average * 10)}%*/}
                                </h3>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
            <Actors cast={actors}/>
        </>
    );
};

export default DetailPage;