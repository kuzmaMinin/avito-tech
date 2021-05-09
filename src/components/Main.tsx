import React from "react";
import {makeStyles} from "@material-ui/core";

import {IWrapperProps} from '../interfaces';

const useStyles = makeStyles({
    main: {
        position: 'relative',
        padding: '5px',
        background: 'rgb(246, 246, 239)',
        boxShadow: '1px 4px 6px black',
        fontSize: '10pt',
        '&--comments': {
            boxShadow: 'none'
        }
    }
});

function Main(props: IWrapperProps) {
    const s = useStyles();
    const {mod} = props

    return (
        <div
            className={mod ? `${s.main} ${s.main}--${mod}` : `${s.main}`}
        >{props.children}</div>
    );
}

export default Main;