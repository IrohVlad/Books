import React from 'react';

export interface IBook {
    href: string | undefined;
    title: string;
    author: string;
}

const Book: React.FC<IBook> = ({href, title, author}: IBook) => {
    return (
        <div className="grid__element">
            <div className="grid__element__img">
                <img src={href} alt="" />
            </div>
            <div className="grid__element__title">
                {title}
            </div>
            <div className="author">{author}</div>
        </div>
    );
};

export default Book;