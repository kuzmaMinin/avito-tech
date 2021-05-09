import React from "react";
import {makeStyles} from "@material-ui/core";

import {IWrapperProps} from '../interfaces';

const useStyle = makeStyles({
    item: {
        display: 'flex',
        flexDirection: 'column',
        padding: '5px 0'
    }
});

function Item(props: IWrapperProps) {
    const s = useStyle();

    return (
        <li className={s.item}>{props.children}</li>
    );
}

export default Item;