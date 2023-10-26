import React from 'react'

const Home = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen gap-2 bg-[#f67280]'>
        <button className='border-2 text-gray-500 border-white rounded-xl  hover:bg-white py-2 px-5'>
            Show All Books
        </button>
        <button className='border-2 text-gray-500 border-white rounded-xl  hover:bg-white py-2 px-9'>
            Add a Book
        </button>
        <button className='border-2 text-gray-500 border-white rounded-xl  hover:bg-white py-2 px-5'>
            Get Book By ID
        </button>
        <button className='border-2 text-gray-500 border-white rounded-xl  hover:bg-white py-2 px-7'>
            Edit the Book
        </button>
        <button className='border-2 text-gray-500 border-white rounded-xl  hover:bg-white py-2 px-2'>
           Delete Book By ID
        </button>
    </div>
  )
}

export default Home