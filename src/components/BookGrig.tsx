import React from 'react';
import Book from './Book';
import { IBook } from './Book';
import { RootState } from '../redux';
import { getBooks } from '../redux/slices/booksSlice';
import {useDispatch, useSelector} from 'react-redux'

const BookGrig: React.FC = () => {
    const store = useSelector((state: RootState) => state.books)
    const dispatch = useDispatch();
    React.useEffect(()=>{
        dispatch(getBooks('https://jsonplaceholder.typicode.com/todos/'))
    }, [])
    let a: Array<IBook> = [{href: 'https://storage.yandexcloud.net/vyksavkurse-files/1/3Yj4lf8jx9EiU-qesBap3qHzSuVCDQcR.jpg', title: 'Книга'}, {href: 'https://storage.yandexcloud.net/vyksavkurse-files/1/3Yj4lf8jx9EiU-qesBap3qHzSuVCDQcR.jpg', title: 'Книга'}, {href: 'https://storage.yandexcloud.net/vyksavkurse-files/1/3Yj4lf8jx9EiU-qesBap3qHzSuVCDQcR.jpg', title: 'Книга'}, {href: 'https://storage.yandexcloud.net/vyksavkurse-files/1/3Yj4lf8jx9EiU-qesBap3qHzSuVCDQcR.jpg', title: 'Книга'}, {href: 'https://storage.yandexcloud.net/vyksavkurse-files/1/3Yj4lf8jx9EiU-qesBap3qHzSuVCDQcR.jpg', title: 'Книга'}, {href: 'https://storage.yandexcloud.net/vyksavkurse-files/1/3Yj4lf8jx9EiU-qesBap3qHzSuVCDQcR.jpg', title: 'Книга'}]
    return (
        <section className='grid-section'>
            <div className="grid__title">{store.loading && 'Загрузка'}</div>
            <div className="grid container">
                {a.map((value, index)=>{
                    return <Book key={index} href={value.href} title={value.title} />
                })}
            </div>
        </section>
    );
};

export default BookGrig;