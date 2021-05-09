import React, {useEffect, useState} from "react";
import {formatDistanceToNow, toDate} from "date-fns";
import {makeStyles} from "@material-ui/core";
import {toggleComments} from "./commentSlice";
import {useDispatch, useSelector} from "react-redux";
import SubComments from "../SubComments/SubComments";
import {fetchSubComments, selectAllSubComments} from "../SubComments/subCommentsSlice";
import Item from "../components/Item";
import Row from "../components/Row";
import {IComments} from "../interfaces";

const useStyles = makeStyles({
    author: {
        paddingRight: '5px',
        fontWeight: 'bold'
    },
    labelComments: {
        fontSize: '7pt',
        color: '#828282',
    },
    time: {
        paddingLeft: '15px',
        fontSize: '7pt',
        color: '#828282',
    },
    triangle: {
        width: 0,
        height: 0,
        padding: 0,
        marginRight: '5px',
        borderLeft: '5px solid transparent',
        borderRight: '5px solid transparent',
        background: 'none',
        '&:hover': {
            cursor: 'pointer',
        }
    },
    triangleBottom: {
        borderTop: '10px solid black',
        borderBottom: 'none',
    },
    triangleTop: {
        borderBottom: '10px solid black',
        borderTop: 'none',
    }
});

function Comment({i}: { i: IComments }) {
    const s = useStyles();
    const dispatch = useDispatch();
    const [showSubComments, setShowSubComments] = useState(false);

    const handleClick = (e: React.MouseEvent<HTMLElement>, id: string | undefined) => {
        if (e.currentTarget.id == id) {
            dispatch(toggleComments(id))
            setShowSubComments(!showSubComments);
        }
    }

    const subComments = useSelector(selectAllSubComments);
    useEffect(() => dispatch<any>(fetchSubComments(i.kids as any)), [dispatch, i.kids]);

    return (
        <Item>
            <Row>
                <p className={s.author}>{i.by}:</p>
                <p>{i.text}</p>
            </Row>
            {i.kids &&
            <Row>
                <input
                    id={i.id}
                    type='submit'
                    className={i.show ? `${s.triangle} ${s.triangleBottom}` : `${s.triangle} ${s.triangleTop}`}
                    onClick={(e:React.MouseEvent<HTMLElement>) => handleClick(e, i.id)}
                />
                {!i.show && <p className={s.labelComments}>show comments</p>}
                <p className={s.time}>{formatDistanceToNow(toDate(i.time * 1000))} ago</p>
            </Row>
            }
            <Row>
                {showSubComments && <SubComments kids={i.kids} subComments={subComments}/>}
            </Row>
        </Item>
    );
}

export default Comment;