import { createContext, useEffect, useState, useContext } from 'react';
import { BookContext, BookData, BookPageType } from './types';
import axios from "axios";
import { BookPageContext } from './BookPageContext';


export const BookList = createContext<BookContext|null>(null)

export const BookListProvider = (props:any) => {/* 
  const {bookPageData, setBookId} = useContext(BookPageContext) as BookPageType */
    const [bookList, setBookList] = useState<BookData[]>([])
    const [showHome, setShowHome] = useState(true)
    const [query, setQuery] = useState<string>("")
    const [search, setSearch] = useState<boolean>(false)

    const calldata = async () => {
        const apiKey: string | undefined = process.env.REACT_APP_API_KEY
        const response = await axios.get(
          `https://www.googleapis.com/books/v1/volumes?q={${query}&${apiKey}}`
        );
        setBookList(response.data.items);
        /* setBookId("") */
      };
      
      if(search){
        calldata()
        console.log(bookList)
        setSearch(false)
        setQuery("")
      }
      useEffect(() => {
        calldata()
        console.log(bookList)
      },[])


    return (
        <BookList.Provider
        value={{bookList,setBookList,query,showHome,setShowHome, search, setSearch, setQuery}}
        >
            {props.children}
        </BookList.Provider>
    )
}