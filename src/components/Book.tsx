import React from 'react';
import { useNavigate } from 'react-router-dom';

export interface IBook {
    href: string | undefined;
    title: string;
    author: Array<string>;
    category: string;
    id: string;
}

const Book: React.FC<IBook> = ({href, title, author, category, id}: IBook) => {
    const navigate = useNavigate()
    return (
        <div onClick={()=> navigate(`/book?id=${id}`)} className="grid__element">
            <div className="grid__element__img">
                <img src={href} alt="" />
            </div>
            <div className="grid__element__title">
                {title}
            </div>
            <div className="category">{category}</div>
            <div className="author">{author.map((value)=>{
                return value
            })}</div>
        </div>
    );
};

export default Book;