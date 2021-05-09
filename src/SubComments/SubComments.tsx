import React from "react";
import SubComment from "./SubComment";
import List from "../components/List";
import {ISubComments} from "../interfaces";

function SubComments({kids, subComments}:{kids: any[], subComments: ISubComments[] }) {
    return (
        <List mod='sub'>
            {
                subComments.map(i => (~kids.indexOf(i.id)) ? <SubComment i={i} key={i.id}/> : false)
            }
        </List>
    );
}

export default SubComments;