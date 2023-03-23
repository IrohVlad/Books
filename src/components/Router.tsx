import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { RouterList } from '../RouteList';
import MainPage from '../pages/MainPage';
import CurrentBookPage from '../pages/CurrentBookPage';

const Router = () => {
    return (
        <Routes>
            {RouterList.map((value, index) =>{
                return <Route key={index} path={value.path} element={<value.element/>}></Route>
            })}
        </Routes>
    );
};

export default Router;