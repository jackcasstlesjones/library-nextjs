import React from "react";

interface Book {
  id: number;
  title: string;
  author: string;
}

export default async function BookList() {
  let books: Book[] = [];
  let error: string | null = null;

  try {
    const response = await fetch("http://localhost:3001/api/books", {
      cache: "no-store", // Avoids caching for dynamic content
    });

    if (!response.ok) {
      throw new Error("Failed to fetch books");
    }

    books = await response.json();
  } catch (err) {
    error = "Error fetching books. Please try again.";
    console.error(err);
  }

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
          books.map((book) => (
            <li
              key={book.id}
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
