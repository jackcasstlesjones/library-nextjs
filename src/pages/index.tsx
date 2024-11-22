import React from "react";
import Link from "next/link";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white">
      <div className="text-center">
        <h1 className="text-5xl font-extrabold leading-tight mb-4">
          Welcome to the Library
        </h1>
        <p className="text-lg mb-6">A place to find and add books with ease.</p>
        <Link
          href="/add"
          className="px-6 py-3 bg-green-600 text-white text-lg font-semibold rounded-lg shadow-lg transition transform hover:bg-green-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          Add a New Book
        </Link>
        <Link
          href="/books"
          className=" ml-10 px-6 py-3 bg-green-600 text-white text-lg font-semibold rounded-lg shadow-lg transition transform hover:bg-green-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          View Our Books
        </Link>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:shadow-xl transition">
          <h2 className="text-2xl font-bold mb-4">Explore Our Collection</h2>
          <p>
            Browse through a wide selection of books from various genres,
            authors, and time periods.
          </p>
        </div>
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:shadow-xl transition">
          <h2 className="text-2xl font-bold mb-4">Manage Your Library</h2>
          <p>
            Keep track of your books, add new ones, and remove those you no
            longer need.
          </p>
        </div>
        <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:shadow-xl transition">
          <h2 className="text-2xl font-bold mb-4">Search and Filter</h2>
          <p>
            Use powerful filters to quickly find books by title, author, or
            genre.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
