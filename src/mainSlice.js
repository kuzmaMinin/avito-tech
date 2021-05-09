import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    items: []
}

export const fetchComments = createAsyncThunk('comments/fetchComments', async (kids) => {
    const res =  await Promise.all(kids.map(async i => {
            return await axios
                .get(`https://hacker-news.firebaseio.com/v0/item/${i}.json`)
                .then(res => res.data);
        })
    );
    return res.map(i => ({...i, show: false}));
});

export const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        toggleComments: (state, action) => {
            state.items = state.items.map(i => i.id == action.payload ? {...i, show: !i.show} : i)
        }
    },
    extraReducers: {
        [fetchComments.pending]: (state) => {
            state.status = 'loading';
        },
        [fetchComments.fulfilled]: (state, action) => {
            state.status = 'succeeded';
            state.items = action.payload;
        },
        [fetchComments.rejected]: (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        }
    }
});

export const {toggleComments} = commentsSlice.actions;

export default commentsSlice.reducer;

export const selectAllComments = state => state.comments.items;


const initialState = {
    items: [],
    status: 'idle',
    error: null
}

export const fetchNews = createAsyncThunk('news/fetchNews', async () => {
    const ids = await axios
        .get('https://hacker-news.firebaseio.com/v0/newstories.json')
        .then(res => res.data.slice(0, 100));

    const res = await Promise.all(ids.map(async i => {
            return await axios
                .get(`https://hacker-news.firebaseio.com/v0/item/${i}.json`)
                .then(res => res.data);
        })
    );
    return res.filter(i => i !== null)
});

export const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchNews.pending]: (state) => {
            state.status = 'loading';
        },
        [fetchNews.fulfilled]: (state, action) => {
            state.status = 'succeeded';
            state.items = action.payload;
        },
        [fetchNews.rejected]: (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        }
    }
});

export default newsSlice.reducer;

export const selectAllNews = state => state.news.items;



const initialState = {
    items: []
}

export const fetchSubComments = createAsyncThunk('subComments/fetchSubComments', async (kids) => {
    const res =  await Promise.all(kids.map(async i => {
            return await axios
                .get(`https://hacker-news.firebaseio.com/v0/item/${i}.json`)
                .then(res => res.data);
        })
    );
    return res.map(i => ({...i, show: false}));
});

export const subCommentsSlice = createSlice({
    name: 'subComments',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchSubComments.pending]: (state) => {
            state.status = 'loading';
        },
        [fetchSubComments.fulfilled]: (state, action) => {
            state.status = 'succeeded';
            state.items = state.items.concat(action.payload);
        },
        [fetchSubComments.rejected]: (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        }
    }
});

export default subCommentsSlice.reducer;

export const selectAllSubComments = state => state.subComments.items;