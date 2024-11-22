import React, { useState } from "react";
import Link from "next/link";

export default function BookForm() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    // Clear any previous error message
    setError("");

    // Prepare the data to be sent
    const newBook = { title, author };

    try {
      // Send a POST request to the API route for adding a new book
      const response = await fetch("/api/books", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newBook),
      });

      if (!response.ok) {
        throw new Error("Failed to add the book");
      }

      // Reset the form if the book was added successfully
      setTitle("");
      setAuthor("");
      alert("Book added successfully!");
    } catch (error) {
      setError("Error adding book. Please try again.");
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-12 px-6">
      <div className="w-full max-w-lg bg-white text-black rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center mb-6">Add a New Book</h2>
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label htmlFor="title" className="text-lg font-medium mb-2">
              Title:
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="author" className="text-lg font-medium mb-2">
              Author:
            </label>
            <input
              type="text"
              id="author"
              name="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              required
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

          <button
            className="bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            type="submit"
          >
            Add Book
          </button>
        </form>

        <div className="mt-6 text-center">
          <Link href="/" className="text-indigo-600 hover:text-indigo-800">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
