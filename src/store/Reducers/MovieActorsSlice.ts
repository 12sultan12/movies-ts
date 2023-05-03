import {IMovieActors} from "../../types/MovieInterfaces";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface IMovieActorsSlice {
    actor: Partial<IMovieActors>
    loader: boolean
    error: string
}
const initialState: IMovieActorsSlice = {
    actor: {},
    loader: false,
    error: ""
}

export const detailActorsSlice = createSlice({
    name: 'actor',
    initialState,
    reducers: {
        fetchingActorDetail(state) {
            state.loader = true
        },
        fetchingActorDetailSuccess(state,action:PayloadAction<IMovieActors>) {
            state.loader = false
            state.actor = action.payload
            state.error = ''
        },
        fetchingActorDetailError(state, action:PayloadAction<string>) {
            state.loader = false
            state.actor = {}
            state.error = action.payload
        }
    }
})

export default detailActorsSlice.reducer
export const {fetchingActorDetail, fetchingActorDetailSuccess, fetchingActorDetailError} = detailActorsSlice.actions