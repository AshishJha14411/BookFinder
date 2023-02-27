import { useContext, useRef } from 'react'
import { BookContext } from '../context/types';
import { BookList } from '../context/BookSearchContext';
import imgBook from '../homepage.jpg'
import { BookPageContext } from '../context/BookPageContext'
import { BookPageType } from '../context/types';
const BookCard = () => {
    /* Booklist and showHome states */
    const { bookList, showHome } = useContext(BookList) as BookContext
    /* Setting bookid for single book data */
    const { setBookId } = useContext(BookPageContext) as BookPageType
    /* using ref to move to a div of books */
    const RecommendedBooks = useRef<null | HTMLDivElement>(null);;
    /* Function to scroll on click */
    const scrollFunc = () => {
        if (RecommendedBooks.current !== null) {
            RecommendedBooks.current.scrollIntoView({ behavior: 'smooth' })
        }
    }
    /* Conditionally rendering text and home img based on ShowHome. */
    return (
        <>
            {showHome ? <div className='flex flex-row  p-8 ml-[5rem] justify-center'>
                <div className='w-[100%]'>
                    <h1 className='font-semibold text-3xl w-[100%] py-[6rem] px-5 text-[#A45C40]'>Find your next page-turner with ease: Discover, Explore, and Dive into the world of books with<span className='font-bold text-4xl'> Book Finder.</span></h1>
                    <button className='ml-[2rem] py-7  transition-all rounded-lg ease-in-out delay-150 px-[3rem] text-[#F6EEE0]  hover:bg-[#b57351] bg-[#A45C40]' onClick={scrollFunc}><span className='font-semibold text-2xl'>Browse Collections</span></button>
                </div>
                <img src={imgBook} alt="homepage-book-img" className='w-[50%]' />
            </div> : <></>}

            <div ref={RecommendedBooks} className='flex flex-row flex-wrap pt-8  justify-around'>
                {bookList && bookList.map((item) => {
                    return (
                        <div className="flex flex-col flex-wrap  w-[20%]  justify-around cursor-pointer items-center mx-[2%] mt-[5rem] p-3 rounded-lg md:flex-row md:max-w-md" key={item.id} onClick={() => { item.id ? setBookId(item.id) : alert("Error Occured! Please Try Again") }}>
                            <img className="w-full rounded-t-lg h-[15%] md:h-[75%] md:w-[60%] md:rounded-none md:rounded-l-lg" src={item.volumeInfo?.imageLinks?.thumbnail} alt="" />
                            <div className="flex flex-col justify-between p-4 leading-normal">
                                <h3 className="mb-2 text-2xl font-bold tracking-tight text-[#A45C40]">{item.volumeInfo.title}</h3>
                                <h5 className="mb-2 /*  */text-md font-bold tracking-tight text-[#A45C40]">{item.volumeInfo.authors}</h5>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default BookCard