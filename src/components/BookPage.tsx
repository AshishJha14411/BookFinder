import { useContext } from 'react'
import { BookPageContext } from '../context/BookPageContext'
import { BookPageType } from '../context/types';

const BookPage = () => {
    /* Single Book data */
  const { bookPageData } = useContext(BookPageContext) as BookPageType
  return (
    <div className='w-[70%] mx-auto  text-[#A45C40]'>
      {bookPageData && bookPageData.map((item) => {
        return (
          <div key={item.id}>
            <div className='flex flex-col xl:flex-row xl:flex-wrap xl:justify-around items-center p-8'>
              <img src={item.volumeInfo.imageLinks?.thumbnail} alt="Book Image" className='w-[15rem] h-[20rem] my-auto' />
              <div className='p-6'>
                <p className='text-2xl pb-3 font-bold'>Title: <span className='font-semibold text-xl'>{item.volumeInfo.title}</span></p>
                <p className='text-2xl pb-3 font-bold'>SubTitle: <span className='text-xl font-semibold'> {item.volumeInfo?.subtitle}</span></p>
                <p className='text-2xl pb-3 font-bold'>Authors: <span className='font-semibold text-xl'>{item.volumeInfo.authors}</span></p>
                <p className='text-2xl pb-3 font-bold'>PageCount: <span className='font-semibold text-xl'>{item.volumeInfo.pageCount}</span></p>
                <p className='text-2xl pb-3 font-bold'>Publisher: <span className='font-semibold text-xl'>{item.volumeInfo.publisher}</span></p>
                <p className='text-2xl pb-3 font-bold'>Published Date: <span className='font-semibold text-xl'>{item.volumeInfo?.publishedDate?.toString()}</span></p>
              </div>
            </div>
            <p className='text-xl font-bold'>Description: <span className='text-[1rem] font-normal'>{item.volumeInfo.description}</span></p>
          </div>
        )
      })}
    </div>
  )
}

export default BookPage