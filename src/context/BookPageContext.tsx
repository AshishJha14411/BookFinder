import { createContext, useEffect, useState, useContext } from "react";
import { BookPageType, BookData } from './types';
import axios from "axios";

import { BookContext } from '../context/types';
import { BookList } from '../context/BookSearchContext';

export const BookPageContext = createContext<BookPageType|null>(null)

export const BookPageProvider = (props:any) => {
    
  const { bookList } = useContext(BookList) as BookContext
    const [bookPageData, setBookPageData] = useState<BookData[]>([])
    const [bookId, setBookId] = useState<string>("")
    const fitlerFunc = (id:string) => {
        const temp = bookList.filter((item) => item.id===id)
        setBookPageData(temp)
    }
    useEffect(() => {
        fitlerFunc(bookId)
        console.log(bookPageData)
    },[bookId])
    return (
        <BookPageContext.Provider
        value={{bookPageData,bookId,setBookId}}
        >
            {props.children}
        </BookPageContext.Provider>
    )
}
export {}