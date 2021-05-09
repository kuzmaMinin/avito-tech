import React from "react";
import {makeStyles} from "@material-ui/core";

import {IWrapperProps} from '../interfaces';

const useStyles = makeStyles({
    list: {
        margin: '0',
        padding: '10px 10px',
        listStyleType: 'none',
        '&--sub': {
            marginTop: '10px',
            paddingLeft: '10px',
            borderTop: '1px solid #444444',
            color: '#444444',
            fontSize: '9pt'
        }
    },
});


function List(props: IWrapperProps) {
    const s = useStyles();
    const {mod} = props

    return (
        <ul
            className={mod ? `${s.list} ${s.list}--${mod}` : `${s.list}`}
        >{props.children}</ul>
    )
}

export default List;