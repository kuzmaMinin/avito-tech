import React, {useEffect} from "react";
import {fetchNews, selectAllNews} from "./newsSlice";
import {useDispatch, useSelector} from "react-redux";
import NewsItem from "./NewsItem";
import Loader from "../Loader/Loader";
import Button from "../components/Button";
import List from "../components/List";
import Main from "../components/Main";
import {INews, IState} from "../interfaces";

function News() {
    const dispatch = useDispatch();

    const news: INews[] = useSelector(selectAllNews);
    const postStatus = useSelector((state: IState) => state.news.status);
    const error = useSelector((state: IState) => state.news.error);

    useEffect(() => {
        String(postStatus) === 'idle' && dispatch(fetchNews())
    }, [postStatus, dispatch]);

    useEffect(() => {
        let interval = setInterval(() => dispatch(fetchNews()), 60000);
        return () => clearInterval(interval);
    }, [dispatch])

    let content;

    if (postStatus === 'loading') {
        content = <Loader/>
    } else if (postStatus === 'succeeded') {
        content = news.map((i: INews , idx: number) => i && <NewsItem i={i} idx={idx} key={i.id}/>)
    } else if (postStatus === 'failed') {
        content = <div>{error}</div>
    }

    return (
            <Main>
                <Button
                    handleClick={() => dispatch(fetchNews())}
                    label='refresh'
                />
                <List>
                    {content}
                </List>
            </Main>
    );
}

export default News;