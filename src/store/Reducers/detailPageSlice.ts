import {IMovieDetail} from "../../types/MovieInterfaces";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface IDetail {
    detail: Partial<IMovieDetail>
    loader: boolean
    error: string
}
const initialState:IDetail = {
    detail: {},
    loader: false,
    error: ""
}

export const detailSlice = createSlice({
    name: 'detail',
    initialState,
    reducers: {
        fetchingDetailPage(state) {
            state.loader = true
        },
        fetchingDetailPageSuccess(state,action:PayloadAction<IMovieDetail>) {
            state.loader = false
            state.detail = action.payload
            state.error = ''
        },
        fetchingDetailPageError(state,action) {
            state.loader = false
            state.detail = {}
            state.error = action.payload
        }
    }
})

export default detailSlice.reducer
export const {fetchingDetailPage, fetchingDetailPageSuccess, fetchingDetailPageError} = detailSlice.actions