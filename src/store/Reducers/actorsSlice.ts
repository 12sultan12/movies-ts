import {IDetailActors} from "../../types/MovieInterfaces";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface IActors {
    actors: IDetailActors[]
    loader: boolean
    error: string
}

const initialState:IActors = {
    actors: [],
    loader: false,
    error: ''
}

export const actorsSlice = createSlice({
    name: 'actors',
    initialState,
    reducers: {
        fetchingActor(state) {
            state.loader = true
        },
        fetchingActorSuccess(state,action:PayloadAction<IDetailActors[]>) {
            state.loader = false
            state.actors = action.payload
            state.error = ''
        },
        fetchingActorError(state, action:PayloadAction<string>) {
            state.loader = false
            state.actors = []
            state.error = action.payload
        }
    }
})

export default actorsSlice.reducer
export const {fetchingActor, fetchingActorSuccess, fetchingActorError} = actorsSlice.actions