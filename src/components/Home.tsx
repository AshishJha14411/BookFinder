import {useContext} from 'react'
import { BookPageType } from '../context/types';
import Navbar from './Navbar';
import BookCard from './BookCard';
import { BookPageContext } from '../context/BookPageContext';
import BookPage from './BookPage';
const Home = () => {
    /* Book Id from Context */
  const {bookId} = useContext(BookPageContext) as BookPageType
  /* Navbar and BookPage or BookCards based on if Bookid is present or not */
  return (
  <div>
    <Navbar />
    {bookId? <BookPage /> :<BookCard />}
  </div>
    )
}

export default Home