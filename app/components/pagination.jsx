"use client";

import { useState, useEffect, use } from "react";

export default function PaginationContainer({ items, title }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const formatedDate = (date) => {
    const formattedDate = new Date(date).toDateString();
    const formattedTime = new Date(date).toLocaleTimeString();
    return `${formattedDate}, ${formattedTime}`;
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(currentItems.length / itemsPerPage);
  const visiblePages = 3;
  const firstVisiblePage = Math.max(
    1,
    currentPage - Math.floor(visiblePages / 2)
  );
  const lastVisiblePage = Math.min(
    totalPages,
    firstVisiblePage + visiblePages - 1
  );

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="border p-8 rounded-md flex flex-col gap-8 justify-between">
      <h1 className="border-4 uppercase shadow-md border-black w-fit font-bold text-3xl md:text-6xl">
        {title}
      </h1>
      <div className="items">
        {currentItems.map((item) => (
          <div
            key={item.id}
            className="py-4 first-of-type:pt-0 first-of-type:border-t-0 last-of-type:mb-0 mb-8 border-y border-white"
          >
            <h3 className="text-3xl mb-4">{item.title}</h3>
            <a href={`/blog/${item.slug}`}>read more {">"}</a>
          </div>
        ))}
      </div>
      {totalPages > 1 && <></>}
      <div className="pagination my-2 ">
        {currentPage !== 1 && (
          <button
            className="ms-0 border p-2 px-3 m-2 rounded-md"
            onClick={() => paginate(1)}
          >
            First
          </button>
        )}

        {Array.from({ length: lastVisiblePage - firstVisiblePage + 1 }).map(
          (_, index) => {
            const pageNumber = firstVisiblePage + index;
            return (
              <a
                className={`first-of-type:ms-0 border p-2 px-3 m-2 rounded-md`}
                key={index}
                onClick={() => paginate(pageNumber)}
              >
                {pageNumber}
              </a>
            );
          }
        )}
        {currentPage !== totalPages && (
          <button
            className="me-0 border p-2 px-3 m-2 rounded-md"
            onClick={() => paginate(totalPages)}
          >
            Last
          </button>
        )}
      </div>
    </div>
  );
}
