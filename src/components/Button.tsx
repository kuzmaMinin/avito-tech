import React from "react";
import {darken, makeStyles} from "@material-ui/core";

import {IWrapperProps} from '../interfaces';

const useStyles = makeStyles({
    button: {
        position: 'absolute',
        right: '10px',
        top: '10px',
        padding: '5px 10px',
        background: '#ff6600',
        border: 'none',
        '&:hover': {
            background: darken('#ff6600', 0.2),
            cursor: 'pointer'
        },
        '&--comments': {
            top: '-50px'
        }
    },
});

const Button = (props: IWrapperProps) => {
    const s = useStyles();
    const {mod} = props

    return (
        <button
            className={mod ? `${s.button} ${s.button}--${mod}` : `${s.button}`}
            onClick={props.handleClick}
        >{props.label}</button>
    );
}

export default Button;