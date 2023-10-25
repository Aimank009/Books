import React from 'react'

const Home = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen gap-2'>
        <button className='border border-gray-500 rounded-xl py-2 px-5'>
            Show All Books
        </button>
        <button className='border border-gray-500 rounded-xl py-2 px-9'>
            Add a Book
        </button>
        <button className='border border-gray-500 rounded-xl py-2 px-5'>
            Get Book By ID
        </button>
        <button className='border border-gray-500 rounded-xl py-2 px-7'>
            Edit the Book
        </button>
        <button className='border border-gray-500 rounded-xl py-2 px-3'>
           Delete Book By ID
        </button>
    </div>
  )
}

export default Home