import React, {ReactEventHandler} from "react";

export interface IWrapperProps {
    children?: React.ReactNode,
    mod? : string,
    label? : string,
    handleClick? : ReactEventHandler
}

export interface IInitialState {
    items: any[],
    status? : 'loading' | 'succeeded' | 'failed' | 'idle',
    error?: string | any
}

export interface IState {
        news: {
            items: any[],
            status: 'loading' | 'succeeded' | 'failed',
            error: string
        },
        comments: {
            items: any[],
            status: 'loading' | 'succeeded' | 'failed',
            error: string
        },
        subComments: {
            items: any[],
            status: 'loading' | 'succeeded' | 'failed',
            error: string
        }
}

export interface INews {
    by: string,
    id: number,
    title: string,
    url: string,
    score: number,
    time: number,
    kids: any[]
}

export interface IComments {
    id: string | undefined
    by: string,
    text: string,
    show: boolean,
    time: number,
    kids: any[]
}

export interface ISubComments {
    id: number,
    by: string,
    text: string
}

export interface IRouteParams {
    postId: string
}
