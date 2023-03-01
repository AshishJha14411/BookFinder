import { useContext } from 'react'
import logo from '../logo.png'
import { BookList } from '../context/BookSearchContext';
import { BookContext, BookPageType } from '../context/types';
import { BookPageContext } from '../context/BookPageContext';

const Navbar = () => {
    /* Importing states from BookList Context */
    const { setSearch, setQuery, query, setBookList, setShowHome } = useContext(BookList) as BookContext
    /* Importing states  from BookPage Context*/
    const { setBookId } = useContext(BookPageContext) as BookPageType
 
    /* Reseting Everything on Home Click and Init an empty Search */
    const handleReset = () => {
        setBookId("")
        setBookList([])
        setSearch(true)
        setShowHome(true)
       
    }
    /* Go back to Searched BookList */
    const handleIDReset = () => {
        setBookId("")
    }
 
    return (
        <div className='p-8 bg-[#C38370]'>
            <nav className='flex flex-row justify-between'>
                <img src={logo} alt="nav-logo" className='w-[13rem]' />
                <div className='w-[80%] flex flex-row justify-around'>
                    <h3 className='pr-[2%] font-semibold text-lg pt-2 text-[#A45C40] cursor-pointer' onClick={handleReset}>Home</h3>
                    <h3 className='pr-[20%] font-semibold text-lg pt-2 text-[#A45C40] cursor-pointer' onClick={handleIDReset}>BookList</h3>
                    <input
                        className='w-[70%] h-[3rem] outline-none p-4'
                        placeholder="Enter the Book you want to search for"
                       
                        onChange={e => {
                            setQuery(e.target.value)
                        }}
                    />
                    <button onClick={() => {
                        setSearch(true)
                        setBookId("")
                        setShowHome(false)
                    }}
                        className='ml-[2rem] py-3 transition-all text-[#F6EEE0] font-bold rounded-lg ease-in-out delay-150 px-8 hover:bg-[#b57351] bg-[#A45C40]'
                    >Search</button>
                </div>
            </nav>
           
        </div>
    )
}

export default Navbar