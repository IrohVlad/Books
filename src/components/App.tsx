import React from 'react';
import Header from './Header';
import BookGrig from './BookGrig';
import {BrowserRouter} from 'react-router-dom'
import Router from './Router';
import {store} from '../redux'
import { Provider } from 'react-redux';

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Router/>
            </BrowserRouter>
        </Provider>
    );
};

export default App;