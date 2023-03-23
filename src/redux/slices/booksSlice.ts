import { AnyAction, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Dispatch } from 'react';

export interface BooksState {
    loading: boolean;
    value: any;
    offset: number
    params: {category: string, sort: string, q: string};
    error: string|null
}

const initialState: BooksState = {
    loading: true,
    value: {},
    offset: 0,
    params: {category: '', sort: 'relevance', q: ''},
    error: null
}



export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    fetchBooks: (state)  => {
        state.offset = 0
        state.loading = true;
        state.error = null;
    },
    fetchMoreBooks: (state)  => {
        state.loading = true;
        state.error = null;
    },
    fetchBooksSucces: (state, action: PayloadAction<any>)  => {
        state.loading = false;
        state.error = null
        state.value = action.payload
    },
    fetchMoreBooksSucces: (state, action: PayloadAction<any>)  => {
        state.loading = false;
        state.error = null
        state.value.totalItems = state.value.totalItems + action.payload.totalItems
        state.value.items = [...state.value.items, ...action.payload.items]
    },
    fetchBooksError: (state, action:PayloadAction<string>)  => {
        state.loading = false;
        state.error = action.payload
    },
    pageIncrease: state => {
        state.offset= state.offset + 30
    },
    setCategory: (state, action: PayloadAction<string>) => {
        state.params.category = action.payload
    },
    setSort: (state, action: PayloadAction<string>) => {
        state.params.sort = action.payload
    },
    setSearch: (state, action: PayloadAction<string>) => {
        state.params.q = action.payload
    }
  },
})

export const getBooks = async (url: string, dispatch: Dispatch<AnyAction> ) => {
    dispatch(fetchBooks());
    try {
        await fetch(url).then(data => data.json()).then(data => dispatch(fetchBooksSucces(data)))
    } catch {
        dispatch(fetchBooksError('Ошибка при загрузке'))
    }
}
export const getMoreBooks = async (url: string, dispatch: Dispatch<AnyAction> ) => {
    dispatch(fetchMoreBooks());
    try {
        await fetch(url).then(data => data.json()).then(data => dispatch(fetchMoreBooksSucces(data)))
    } catch {
        dispatch(fetchBooksError('Ошибка при загрузке'))
    }
}

// Action creators are generated for each case reducer function
export const { fetchBooks, fetchBooksError, fetchBooksSucces, setCategory, setSort, setSearch, fetchMoreBooksSucces, pageIncrease, fetchMoreBooks } = booksSlice.actions

export default booksSlice.reducer