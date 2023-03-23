import MainPage from "./pages/MainPage";
import CurrentBookPage from "./pages/CurrentBookPage";
import React from 'react'

interface IRoute {
    path: string;
    element: React.FC
}

export const RouterList: Array<IRoute> = [
    {
        path: '/',
        element: MainPage
    },
    {
        path: '/book',
        element: CurrentBookPage
    }
]