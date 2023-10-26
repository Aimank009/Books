import React, { useState } from 'react';
import books from '../bookdata.js'; // Import your book data from the JSON file

const GetBookById = () => {
  const [isbn, setIsbn] = useState('');
  const [bookInfo, setBookInfo] = useState(null);

  const handleIsbnChange = (e) => {
    setIsbn(e.target.value);
  };

  const findBookByIsbn = () => {

    const foundBook = books.find((book) => book.isbn13 === Number(isbn));
    console.log("foundBook----",foundBook);
    if (foundBook) {
      setBookInfo(foundBook);
    } else {
      console.log("No book found");
      setBookInfo(null);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen -mt-[10rem]">
      <h1 className="text-2xl">Enter the Book-ID</h1>
      <input
        type="text"
        className="border border-black mt-2 rounded-md shadow-xl"
        value={isbn}
        onChange={handleIsbnChange}
      />
      <button onClick={findBookByIsbn} className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md">
        Search
      </button>
      {bookInfo && (
        <div className="mt-4">
          <h2 className='text-2xl'>{bookInfo.title}</h2>
          <img src={bookInfo.thumbnail} alt="Book Cover" />
          <p className='text-sm text-gray-500'>{bookInfo.authors}</p>
          <p className='text-sm text-gray-500'>Published year:--{bookInfo.published_year}</p>
          <p className='text-sm text-gray-500'>Ratings:--{bookInfo.ratings_count}</p>
          <p className='text-sm text-gray-500'>Average:--{bookInfo.average_rating}</p>
          <p className='text-sm text-gray-500'>Pages:--{bookInfo.num_pages}</p>
         
        </div>
      )}
    </div>
  );
};

export default GetBookById;