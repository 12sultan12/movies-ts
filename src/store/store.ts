import {combineReducers, configureStore} from "@reduxjs/toolkit";
import movieSlice from "./Reducers/movieSlice";
import detailSlice from "./Reducers/detailPageSlice";
import actorsSlice from "./Reducers/actorsSlice";
import detailActorsSlice from "./Reducers/MovieActorsSlice";


const rootReducer = combineReducers({
    movieSlice,
    detailSlice,
    actorsSlice,
    detailActorsSlice
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type rootState = ReturnType<typeof rootReducer>
type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']