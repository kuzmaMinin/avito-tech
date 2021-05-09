import React from "react";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({
    container: {
        display: 'flex',
        padding: '2px 5px 2px 2px',
        background: '#ff6600',
        boxShadow: '1px 4px 6px black'
    },
    list: {
        display: 'flex',
        padding: 0,
        margin: 0,
        marginLeft: '10px',
        listStyleType: 'none',

        '&:last-child': {
            marginLeft: 'auto',
        }
    },
    item: {
        '& a': {
            padding: '5px',
            fontSize: '10pt',
            lineHeight: '12px',
            textDecoration: 'none',
            color: 'black'
        }
    },
    title: {
        padding: '5px',
        fontSize: '10pt',
        lineHeight: '12px',
        fontWeight: 'bold',
        margin: 0,
        "& a": {
            color: 'black',
            textDecoration: 'none'
        }
    },
    logo: {
        width: '18px',
        height: '18px',
        border: '1px solid white'
    }
});

function Header() {
    const s = useStyles();

    return (
        <div className={s.container}>
            <img className={s.logo} src={'/y18.gif'} alt=""/>
            <div className={s.title}><a href="/">Hacker News</a></div>

            <ul className={s.list}>
                <li className={s.item}><a href="/">new</a> |</li>
                <li className={s.item}><a href="/"> past</a> |</li>
                <li className={s.item}><a href="/"> comments</a> |</li>
                <li className={s.item}><a href="/"> ask</a> |</li>
                <li className={s.item}><a href="/"> show</a> |</li>
                <li className={s.item}><a href="/"> jobs</a> |</li>
                <li className={s.item}><a href="/"> submit</a></li>
            </ul>
            <ul className={s.list}>
                <li className={s.item}><a href="/">login</a></li>
            </ul>
        </div>
    );
}

export default Header;