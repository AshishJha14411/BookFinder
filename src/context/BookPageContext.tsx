import { createContext, useEffect, useState, useContext } from "react";
import { BookPageType, BookData } from './types';
import { BookContext } from '../context/types';
import { BookList } from '../context/BookSearchContext';

export const BookPageContext = createContext<BookPageType|null>(null)

export const BookPageProvider = (props:any) => {
    /* Importing list of books from Booklist context */
  const { bookList } = useContext(BookList) as BookContext
  /* State for storing one book data */
    const [bookPageData, setBookPageData] = useState<BookData[]>([])
    /* State for storing ID of the book clicked  */
    const [bookId, setBookId] = useState<string>("")
    /* Filter based on selected ID */
    const fitlerFunc = (id:string) => {
        const temp = bookList.filter((item) => item.id===id)
        setBookPageData(temp)
    }
    /* Run FilterFunc every BookId changes */
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