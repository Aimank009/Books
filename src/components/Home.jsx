import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate=useNavigate();
    
    const handleBooks=()=>{
        navigate('/books')
    }
    const handleAddBook=()=>{
        navigate('/addBook')
    }
    const handleGetBookById=()=>{
        navigate('/getbook')
    }
    const handleEditBookById=()=>{
        navigate('/editbook')
    }
    const handleDeleteBookById=()=>{
        navigate('/deletebook')
    }

  return (
    <div className='flex flex-col justify-center items-center h-screen gap-2 bg-[#f67280]'>
        <button onClick={handleBooks} className='border-2 text-gray-500 border-white rounded-xl  hover:bg-white py-2 px-5'>
            Show All Books
        </button>
        <button onClick={handleAddBook} className='border-2 text-gray-500 border-white rounded-xl  hover:bg-white py-2 px-9'>
            Add a Book
        </button>
        <button onClick={handleGetBookById} className='border-2 text-gray-500 border-white rounded-xl  hover:bg-white py-2 px-5'>
            Get Book By ID
        </button>
        <button onClick={handleEditBookById} className='border-2 text-gray-500 border-white rounded-xl  hover:bg-white py-2 px-7'>
            Edit the Book
        </button>
        <button onClick={handleDeleteBookById} className='border-2 text-gray-500 border-white rounded-xl  hover:bg-white py-2 px-2'>
           Delete Book By ID
        </button>
    </div>
  )
}

export default Home