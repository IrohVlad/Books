import React from 'react';
import Book from './Book';
import { RootState } from '../redux';
import { useNavigate } from 'react-router-dom';
import { getBooks, getMoreBooks, pageIncrease } from '../redux/slices/booksSlice';
import {useDispatch, useSelector} from 'react-redux'
import BooksSkeleton from './BooksSkeleton';
import { key } from '../utils';

const BookGrig: React.FC = () => {
    const store = useSelector((state: RootState) => state.books)
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const mockArr = [{},{},{},{},{},{},{},{},{},{}];
    React.useEffect(()=>{
        getBooks(`https://www.googleapis.com/books/v1/volumes?orderBy=${store.params.sort}&startIndex=0&maxResults=30&q=${store.params.q}:keys&key=${key}`, dispatch)
    }, [store.params.sort, store.params.q])
    React.useEffect(()=>{
        if(store.offset == 0){

        } else {
            getMoreBooks(`https://www.googleapis.com/books/v1/volumes?orderBy=${store.params.sort}&startIndex=${store.offset}&maxResults=30&q=${store.params.q}:keys&key=${key}`, dispatch)
        }
    }, [store.offset])
    return (
        <section className='grid-section'>
            <div className="grid__title">{store.loading ? 'Загрузка...' : `Результатов: ${store.value.totalItems}`}</div>
            <div className="grid container">
                {store.loading ? mockArr.map((_, index)=>{
                    return <BooksSkeleton mode={''} key={index}/>
                }) : store.value.totalItems>0 && store.value.items.filter(value => !store.params.category || value.volumeInfo.categories && value.volumeInfo.categories.indexOf(store.params.category) != -1).map((value)=>{
                    return <Book key={value.id} id={value.id} href={value.volumeInfo.imageLinks && value.volumeInfo.imageLinks.thumbnail ? value.volumeInfo.imageLinks.thumbnail : ''} category={value.volumeInfo.categories ? value.volumeInfo.categories[0] : '---'} author={value.volumeInfo.authors && value.volumeInfo.authors || []} title={value.volumeInfo.title} />
                })}
            </div>
            <div onClick={()=>{
                dispatch(pageIncrease())
            }} className="grid__add-button container">
                Больше книг
            </div>
        </section>
    );
};

export default BookGrig;