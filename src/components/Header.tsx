import React from 'react';
import search from '../assets/search.svg'
const Header: React.FC = () => {
    return (
        <header>
            <div className="header container">
                <div className="header__title">Books</div>
                <div className="header__search">
                    <input type="text" />
                    <div className="search__icon">
                        <img src={search} alt="" />
                    </div>
                </div>
                <div className="header__params">
                    <div className="header__param">
                        <label htmlFor="">Categories</label>
                        <select name="" id="">
                            <option value=""></option>
                        </select>
                    </div>
                    <div className="header__param">
                        <label htmlFor="">Sort by</label>
                        <select name="" id="">
                            <option value=""></option>
                        </select>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;