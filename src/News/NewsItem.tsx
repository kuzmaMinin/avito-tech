import React from "react";
import {Link} from "react-router-dom";
import {formatDistanceToNow, toDate} from "date-fns";
import {makeStyles} from "@material-ui/styles";
import Item from "../components/Item";
import Row from "../components/Row";
import {INews} from "../interfaces";

const useStyles = makeStyles({
    title: {
        textDecoration: 'none',
        color: 'black',
        '&:hover': {
            cursor: 'pointer'
        }
    },
    number: {
        paddingRight: '10px',
    },
});

function NewsItem({i, idx} : {i: INews, idx: number}){
    const s = useStyles();

    return (
        <Item key={i.id}>
            <Row>
                <p className={s.number}>{idx + 1}.</p>
                <Link className={s.title} to={`/${i.id}`}>{i.title}</Link>
            </Row>
            <Row mod='small'>
                <p>author: {i.by}</p>
                <p>scores: {i.score}</p>
                <p>{formatDistanceToNow(toDate(i.time * 1000))} ago</p>
                {i.kids && <p>comments: {i.kids.length}</p>}
            </Row>
        </Item>
    );
}

export default NewsItem;