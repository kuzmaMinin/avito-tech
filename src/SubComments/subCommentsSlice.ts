import {createAsyncThunk, createSlice, SliceCaseReducers} from "@reduxjs/toolkit";
import axios from "axios";

import {IInitialState, IState} from "../interfaces";

const initialState: IInitialState = {
    items: []
}

export const fetchSubComments = createAsyncThunk('subComments/fetchSubComments',
    async (kids: []) => {
        const res = await Promise.all(
            kids.map(async i => {
                return await axios
                    .get(`https://hacker-news.firebaseio.com/v0/item/${i}.json`)
                    .then(res => res.data);
            })
        );
        return res.map(i => ({...i, show: false}));
    });

export const subCommentsSlice = createSlice<IInitialState, SliceCaseReducers<any>, string>({
    name: 'subComments',
    initialState,
    reducers: {},
    extraReducers: builder => {
        return builder.addCase(fetchSubComments.pending, (state: IInitialState) => {
            state.status = 'loading';
            state.items = [];
        }),
            builder.addCase(fetchSubComments.fulfilled, (state: IInitialState, action) => {
                state.status = 'succeeded';
                state.items = state.items.concat(action.payload);
            }),
            builder.addCase(fetchSubComments.rejected, (state: IInitialState, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
    }
});

export default subCommentsSlice.reducer;

export const selectAllSubComments = (state: IState | any) => state.subComments.items;