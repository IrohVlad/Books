import React from 'react';
import Book from './Book';
import { IBook } from './Book';
import { RootState } from '../redux';
import { getBooks } from '../redux/slices/booksSlice';
import {useDispatch, useSelector} from 'react-redux'
import BooksSkeleton from './BooksSkeleton';

const BookGrig: React.FC = () => {
    const store = useSelector((state: RootState) => state.books)
    const dispatch = useDispatch();
    const mockArr = [{},{},{},{},{}];
    const key = 'AIzaSyBMSWzr1PoXVlNOPTvwqr0zwCWaiXfEE2c'
    React.useEffect(()=>{
        getBooks(`https://www.googleapis.com/books/v1/volumes?sortBy=medical&orderBy=newest&startIndex=0&maxResults=30&q=:keys&key=${key}`, dispatch)
    }, [])
    return (
        <section className='grid-section'>
            <div className="grid__title">{store.loading ? 'Загрузка...' : `Результатов: ${store.value.totalItems}`}</div>
            <div className="grid container">
                {store.loading ? mockArr.map(()=>{
                    return <BooksSkeleton/>
                }) : store.value.items.map((value, index)=>{
                    return <Book key={index} href={value.volumeInfo.imageLinks.thumbnail} author={value.volumeInfo.authors && value.volumeInfo.authors[0] || '--'} title={value.volumeInfo.title} />
                })}
            </div>
            <div className="grid__add-button container">
                Больше книг
            </div>
        </section>
    );
};

export default BookGrig;