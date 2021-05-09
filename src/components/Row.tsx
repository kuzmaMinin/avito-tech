import React from "react";
import {makeStyles} from "@material-ui/styles";

import {IWrapperProps} from '../interfaces';

const useStyles = makeStyles({
    row: {
        display: 'flex',
        marginBottom: '5px',
        '&--small': {
            paddingLeft: '22px',
            color: '#828282',
            fontSize: '8pt',
            '& p': {
                marginRight: '5px'
            }
        },
    }
});

function Row(props: IWrapperProps) {
    const s = useStyles();
    const {mod} = props;

    return (
        <div className={mod ? `${s.row} ${s.row}--${mod}` : `${s.row}`}>{props.children}</div>
    );
}

export default Row;