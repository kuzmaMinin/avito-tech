import React from "react";
import {useSelector} from "react-redux";
import {useParams} from 'react-router-dom';
import {makeStyles} from "@material-ui/core";
import {format, toDate} from "date-fns";
import Comments from "../Comments/Comments";
import Row from "../components/Row";
import Main from "../components/Main";
import {INews, IRouteParams, IState} from "../interfaces";

const useStyles = makeStyles({
    author: {
        paddingLeft: '5px',
        fontSize: '7pt',
        color: '#828282',
    },
    date: {
        fontSize: '7pt',
        color: '#828282',
    },
    comments: {
        fontSize: '7pt',
        color: '#828282',
    },
    title: {
        padding: '5px',
        '& a': {
            color: 'black',
            textDecoration: 'none'
        }
    },
    back: {
        color: 'black',
        padding: '5px'
    }
});

function Post() {
    const s = useStyles();
    const {postId} = useParams<IRouteParams>();

    const post: INews = useSelector((state: IState) => state.news.items.find(i => i.id === Number(postId)));

    return (
        <Main>
            <Row>
                <p className={s.title}><a href={post.url}>{post.title}</a></p>
            </Row>
            <Row>
                <p className={s.author}>by {post.by}</p>
                <p className={s.date}>{format(toDate(post.time * 1000), 'd MMM yyyy h-m')}</p>
                <p className={s.comments}>comments: {post.kids ? post.kids.length : 0}</p>
            </Row>
            <a className={s.back} href='/'>back</a>
            <Comments kids={post.kids}/>
        </Main>
    );
}

export default Post;