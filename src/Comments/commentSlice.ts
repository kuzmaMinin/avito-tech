import {createAsyncThunk, createSlice, SliceCaseReducers} from "@reduxjs/toolkit";
import axios from "axios";
import {IComments, IInitialState, IState} from "../interfaces";

const initialState: IInitialState = {
    items: []
}

export const fetchComments = createAsyncThunk('comments/fetchComments',
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

export const commentsSlice = createSlice<IInitialState, SliceCaseReducers<any>, string>({
    name: 'comments',
    initialState,
    reducers: {
        toggleComments: (state, action) => {
            state.items = state.items.map((i: IComments) => i.id === action.payload ? {...i, show: !i.show} : i)
        }
    },
    extraReducers: builder => {
        return builder.addCase(fetchComments.pending, (state) => {
            state.status = 'loading';
        }),
            builder.addCase(fetchComments.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload;
            }),
            builder.addCase(fetchComments.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
    }
});

export const {toggleComments} = commentsSlice.actions;

export default commentsSlice.reducer;

export const selectAllComments = (state: IState | any) => state.comments.items;