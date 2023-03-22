import React from 'react';
import Header from './Header';
import BookGrig from './BookGrig';

const App: React.FC = () => {
    return (
        <>
        <Header/>
        <main>
            <BookGrig/>
        </main>
        </>
    );
};

export default App;