import {AppDispatch} from "../store";
import axios from "axios";
import {APIKEY} from "../../ApiKey/APIKEY";
import {fetchingMovie, fetchingMovieError, fetchingMovieSuccess} from "./movieSlice";
import {fetchingActor, fetchingActorError, fetchingActorSuccess} from "./actorsSlice";
import {fetchingDetailPage, fetchingDetailPageError, fetchingDetailPageSuccess} from "./detailPageSlice";
import {fetchingActorDetail, fetchingActorDetailError, fetchingActorDetailSuccess} from "./MovieActorsSlice";

export const fetchingPopulars = async (dispatch: AppDispatch) => {
    try {
        dispatch(fetchingMovie())
        const responsive = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}&language=en-US&page=1`)
        const {data} = await responsive
        dispatch(fetchingMovieSuccess(data.results))
    } catch (e: any) {
        dispatch(fetchingMovieError(e.message))
    }
}
export const fetchingTopRated = async (dispatch: AppDispatch) => {
    try {
        dispatch(fetchingMovie())
        const responsive = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${APIKEY}&language=en-US&page=1`)
        const {data} = responsive
        dispatch(fetchingMovieSuccess(data.results))
    } catch (e: any) {
        dispatch(fetchingMovieError(e.message))
    }
}
export const fetchingUpcoming = async (dispatch: AppDispatch) => {
    try {
        dispatch(fetchingMovie())
        const responsive = await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${APIKEY}&language=en-US&page=1`)
        const {data} = responsive
        dispatch(fetchingMovieSuccess(data.results))
    } catch (e: any) {
        dispatch(fetchingMovieError(e.message))
    }
}
export const fetchingDetailPages = (id: any) => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(fetchingDetailPage())
            const responsive = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${APIKEY}&language=en-US`)
            dispatch(fetchingDetailPageSuccess(responsive.data))
        } catch (e: any) {
            fetchingDetailPageError(e.message)
        }
    }
}
export const fetchingActors = (id: any) => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(fetchingActor())
            const responsive = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${APIKEY}&language=en-US`)
            dispatch(fetchingActorSuccess(responsive.data.cast))
        } catch (e: any) {
            dispatch(fetchingActorError(e.message))
        }
    }
}
export const fetchingActorsDetail = (id: any) => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(fetchingActorDetail())
            const responsive = await axios.get(`https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${APIKEY}&language=en-US`)
            fetchingActorDetailSuccess(responsive.data)
        } catch (e: any) {
            dispatch(fetchingActorDetailError(e.message))
        }
    }
}