import React, { useState } from "react";
import books from "../bookdata.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const GetBooks = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 20;

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

  const totalBooks = books.length;
  const totalPages = Math.ceil(totalBooks / booksPerPage);

  const pageNumbers = [];
  for (let i = currentPage - 2; i <= currentPage + 2; i++) {
    if (i > 0 && i <= totalPages) {
      pageNumbers.push(i);
    }
  }

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Books</h1>
      <div className="grid grid-cols-5 gap-4">
  {currentBooks.map((book, index) => (
    <div key={index} className="border p-4 rounded-lg shadow-md relative">
      <h3 className="text-lg font-semibold">{book.title}</h3>
      <p className="text-gray-600">{book.author}</p>
      <img src={book.thumbnail} alt="" />
      <p className="text-gray-600 text-sm">ISBN: {book.isbn13}</p>
    </div>
  ))}
</div>
      <div className="flex justify-center mb-10">
        <ul className="pagination mt-4 flex items-center">
          <li
            className="cursor-pointer p-4 m-1 rounded-full bg-blue-500 text-white"
            onClick={handlePreviousPage}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </li>
          {pageNumbers.map((number) => (
            <li
              key={number}
              className={`${
                number === currentPage
                  ? "bg-blue-500 text-white"
                  : "bg-white text-black"
              } cursor-pointer rounded-full p-3 m-2  `}
              onClick={() => handlePageClick(number)}
            >
              {number}
            </li>
          ))}
          <li
            className="  cursor-pointer p-4 m-1 rounded-full bg-blue-500 text-white"
            onClick={handleNextPage}
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default GetBooks;
