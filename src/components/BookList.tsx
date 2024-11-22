import React, { useEffect, useState } from "react";

interface Book {
  id: number;
  title: string;
  author: string;
}

export default function BookList() {
  const [books, setBooks] = useState<Book[]>([]);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch("/api/books");
        if (!response.ok) {
          throw new Error("Failed to fetch books");
        }
        const data: Book[] = await response.json();
        setBooks(data);
      } catch (error) {
        setError("Error fetching books. Please try again.");
        console.log(error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6">
      <h2 className="text-3xl font-semibold text-center mb-6">Book List</h2>

      {error && <p className="text-red-500 text-center mb-4">{error}</p>}

      <ul className="space-y-4">
        {books.length === 0 ? (
          <p className="text-center text-lg text-gray-500">
            No books available
          </p>
        ) : (
          books.map((book, index) => (
            <li
              key={index}
              className="flex justify-between items-center p-4 bg-gray-100 rounded-lg shadow-sm hover:bg-gray-200 transition-all"
            >
              <div>
                <h3 className="text-xl font-semibold">{book.title}</h3>
                <p className="text-sm text-gray-600">{book.author}</p>
              </div>
              <button className="text-indigo-600 hover:text-indigo-800">
                View Details
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
