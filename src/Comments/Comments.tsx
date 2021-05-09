import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchComments, selectAllComments} from "./commentSlice";
import Comment from "./Comment";
import Loader from "../Loader/Loader";
import Button from "../components/Button";
import List from "../components/List";
import Main from "../components/Main";
import {IComments, IState} from "../interfaces";

function Comments({kids}: any) {
    const dispatch = useDispatch();

    useEffect(() => {
        let interval = setInterval(() => dispatch(fetchComments(kids)), 60000);
        return () => clearInterval(interval);
    }, [kids, dispatch])

    useEffect(() => dispatch<any>(fetchComments(kids)), [kids, dispatch]);

    const comments = useSelector(selectAllComments);
    const commentStatus = useSelector((state: IState) => state.comments.status);

    let content;

    if (commentStatus === 'loading') {
        content = <Loader/>
    } else if (commentStatus === 'succeeded') {
        content = comments.map((i: IComments) => <Comment key={i.id} i={i}/>)
    } else if (commentStatus === 'failed') {
        content = <div>there is no comments yet...</div>
    }

    return (
        <Main mod='comments'>
            <Button
                mod='comments'
                handleClick={() => dispatch(fetchComments(kids))}
                label='refresh'
            />
            <List>{content}</List>
        </Main>

    );
}

export default Comments;