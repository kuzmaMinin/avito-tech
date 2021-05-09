import React from "react";
import {makeStyles} from "@material-ui/core";
import Item from "../components/Item";
import Row from "../components/Row";
import {ISubComments} from "../interfaces";

const useStyles = makeStyles({
    title: {
        marginRight: '5px',
        fontWeight: 'bold'
    }
});

function SubComment({i}: { i: ISubComments }) {
    const s = useStyles();
    return (
        <Item>
            <Row>
                <p className={s.title}>{i.by}:</p>
                <p>{i.text}</p>
            </Row>
        </Item>
    );
}

export default SubComment;