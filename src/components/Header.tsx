import React from 'react';
import search from '../assets/search.svg'
import {useDispatch, useSelector} from 'react-redux'
import { RootState } from '../redux';
import { setCategory, setSort, setSearch } from '../redux/slices/booksSlice';
const Header: React.FC = () => {
    const dispatch = useDispatch()
    const store = useSelector((state: RootState) => state.books)
    const [input, setInput] = React.useState('');
    return (
        <header>
            <div className="header container">
                <div className="header__title">Books</div>
                <div className="header__search">
                    <input onKeyDown={(e)=>{
                        if(e.key == 'Enter' ){
                            dispatch(setSearch(input))
                            console.log('Enter')
                        }
                    }} value={input} onChange={(e)=>{
                        setInput(e.target.value)
                    }} type="text" />
                    <div onClick={(e)=> {
                        dispatch(setSearch(input))
                    }} className="search__icon">
                        <img src={search} alt="" />
                    </div>
                </div>
                <div className="header__params">
                    <div className="header__param">
                        <label htmlFor="sort">Categories</label>
                        <select value={store.params.sort} onChange={(e)=>{
                            dispatch(setSort(e.target.value))
                        }} name="sort" id="sort">
                            <option value="relevance">relevance</option>
                            <option value="newest">newest</option>
                        </select>
                    </div>
                    <div className="header__param">
                        <label htmlFor="category">Sort by</label>
                        <select value={store.params.category} onChange={(e)=>{
                            dispatch(setCategory(e.target.value))
                        }} name="category" id="category">
                            <option value="">all</option>
                            <option value="art">art</option>
                            <option value="biography">biography</option>
                            <option value="computers">computers</option>
                            <option value="history">history</option>
                            <option value="medical">medical</option>
                            <option value="poetry">poetry</option>
                        </select>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;