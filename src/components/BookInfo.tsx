import React from 'react';
import BooksSkeleton from './BooksSkeleton'

const BookInfo = () => {
    interface data {
        loading: boolean;
        data: any
    }
    const id = new URLSearchParams(window.location.search).get('id')
    const [bookData, setBookData] = React.useState<data>({loading: true, data: {}})
    const key = 'AIzaSyBMSWzr1PoXVlNOPTvwqr0zwCWaiXfEE2c'
    async function fetchBook () {
        await fetch(`https://www.googleapis.com/books/v1/volumes/${id}?key=${key}`).then(data => data.json()).then(data => setBookData({loading: false, data}))
    }
    React.useEffect(()=>{
        fetchBook()
    },[])

    return (
        <section className='book__info-section'>
            <div className="book__info container">
                <div className="book__info__img">
                    {bookData.loading ? <BooksSkeleton mode={'current'}/> : <img src={bookData.data.volumeInfo ? bookData.data.volumeInfo.imageLinks.large || bookData.data.volumeInfo.imageLinks.thumbnail || bookData.data.volumeInfo.imageLinks.medium : ''} alt="" />}
                </div>
                <div className="book__info__data">
                    <div className="title">{bookData.data.volumeInfo && bookData.data.volumeInfo.title || '-'}</div>
                    <ul className="categories">{bookData.data.volumeInfo && bookData.data.volumeInfo.categories && bookData.data.volumeInfo.categories.map((value)=>{
                        return <li>{value}</li>
                    })}</ul>
                    <div className="description">{bookData.data.volumeInfo && bookData.data.volumeInfo.description || '-'}</div>
                    <ul className="authors">

                        {bookData.data.volumeInfo && bookData.data.volumeInfo.authors && bookData.data.volumeInfo.authors.map((value)=>{
                            return <li>{value}</li>
                        })}
                    </ul>
                </div>
            </div>
        </section>
)};

export default BookInfo;