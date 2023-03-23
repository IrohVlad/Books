import React from 'react';
import Header from '../components/Header';
import BookInfo from '../components/BookInfo';

const CurrentBookPage = () => {
    return (
        <>
        <Header/>
        <main>
            <BookInfo/>
        </main>
        </>
    );
};

export default CurrentBookPage;