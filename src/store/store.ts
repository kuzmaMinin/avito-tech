import {configureStore} from "@reduxjs/toolkit";
import newsReducer from '../News/newsSlice';
import commentReducer from '../Comments/commentSlice';
import subCommentReducer from '../SubComments/subCommentsSlice';

export default configureStore({
        reducer: {
            news: newsReducer,
            comments: commentReducer,
            subComments: subCommentReducer
        }
    }
);