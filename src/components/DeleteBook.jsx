import React from 'react'

const DeleteBook = () => {
  return (
    <div>
        <div className="flex flex-col items-center justify-center h-screen -mt-[10rem]">
      <h1 className="text-2xl">Enter the Book-ID</h1>
      <input
        type="text"
        className="border border-black mt-2 rounded-md shadow-xl"
      />
      <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md">
        Delete
      </button>
    </div>
    </div>
  )
}

export default DeleteBook