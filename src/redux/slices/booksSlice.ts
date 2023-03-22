import { AnyAction, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Dispatch } from 'react';

export interface BooksState {
    loading: boolean;
    value: any;
    error: string|null
}

const initialState: BooksState = {
    loading: true,
    value: {},
    error: null
}



export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    fetchBooks: (state)  => {
        console.log('Загрузка')
        state.loading = true;
        state.error = null
    },
    fetchBooksSucces: (state, action: PayloadAction<Array<object>>)  => {
        state.loading = false;
        state.error = null
        state.value = action.payload
        console.log('Загружено')
    },
    fetchBooksError: (state, action:PayloadAction<string>)  => {
        state.loading = false;
        state.error = action.payload
    },
  },
})

export const getBooks = async (url: string, dispatch: Dispatch<AnyAction> ) => {
    dispatch(fetchBooks());
    try {
        await fetch(url).then(data => data.json()).then(data => dispatch(fetchBooksSucces(data)))
    } catch {
        dispatch(fetchBooksError('Ошибка при загрузке'))
    } finally{
    }
}

// Action creators are generated for each case reducer function
export const { fetchBooks, fetchBooksError, fetchBooksSucces } = booksSlice.actions

export default booksSlice.reducer