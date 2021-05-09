import {createAsyncThunk, createSlice, SliceCaseReducers} from "@reduxjs/toolkit";
import axios from "axios";
import {IInitialState, IState} from "../interfaces";

const initialState: IInitialState = {
    items: [],
    status: 'idle',
    error: null
}

export const fetchNews = createAsyncThunk('news/fetchNews', async () => {
    const ids: any[] = await axios
        .get('https://hacker-news.firebaseio.com/v0/newstories.json')
        .then(res => res.data.slice(0, 100));

    const res = await Promise.all(
        ids.map(async i => {
            return await axios
                .get(`https://hacker-news.firebaseio.com/v0/item/${i}.json`)
                .then(res => res.data);
        })
    );
    return res.filter(i => i !== null)
});

export const newsSlice = createSlice<IInitialState, SliceCaseReducers<any>, string>({
    name: 'news',
    initialState,
    reducers: {},
    extraReducers: builder => {
        return builder.addCase(fetchNews.pending, (state) => {
            state.status = 'loading';
        }),
            builder.addCase(fetchNews.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.items = action.payload;
        }),
            builder.addCase(fetchNews.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
    }
});

export default newsSlice.reducer;

export const selectAllNews = (state: IState | any) => state.news.items;
