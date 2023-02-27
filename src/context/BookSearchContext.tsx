import { createContext, useEffect, useState } from 'react';
import { BookContext, BookData } from './types';
import axios from "axios";

export const BookList = createContext<BookContext|null>(null)

export const BookListProvider = (props:any) => {
  /* State for storing search list */
    const [bookList, setBookList] = useState<BookData[]>([])
    /* State for Conditionally rendering Home text and img */
    const [showHome, setShowHome] = useState(true)
    /* State for storing search string */
    const [query, setQuery] = useState<string>("")
    /* State for search init condition */
    const [search, setSearch] = useState<boolean>(false)

    /* Fetching the Booklist from api */
    const calldata = async () => {
      /* Api key */
        const apiKey: string | undefined = process.env.REACT_APP_API_KEY
        const response = await axios.get(
          `https://www.googleapis.com/books/v1/volumes?q={${query}&${apiKey}}`
        );
        setBookList(response.data.items);
      };
      /* post get req if "Search" is true and reseting search and query */
      if(search){
        calldata()
        console.log(bookList)
        setSearch(false)
        setQuery("")
      }
      /* Initial One time run */
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