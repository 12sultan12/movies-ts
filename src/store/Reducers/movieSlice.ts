import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IMovieInterfaces} from "../../types/MovieInterfaces";

interface IMovie {
    movie: IMovieInterfaces[]
    loader: boolean
    error: string

}
const initialState:IMovie = {
    movie: [],
    loader: false,
    error: "",

}
export const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        fetchingMovie(state) {
            state.loader = true
        },
        fetchingMovieSuccess(state,action:PayloadAction<IMovieInterfaces[]>) {
            state.loader = false
            state.movie = action.payload
            state.error = ''
        },
        fetchingMovieError(state,action:PayloadAction<string>) {
            state.loader = false
            state.movie = []
            state.error = action.payload
        }
    }
})
export default movieSlice.reducer
export const {fetchingMovie, fetchingMovieSuccess, fetchingMovieError} = movieSlice.actions
