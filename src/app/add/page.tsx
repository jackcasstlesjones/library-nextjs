"use client";

import BookForm from "@/components/BookForm";

export default function AddBook() {
  return (
    <div>
      <h1 className=" mt-10 text-4xl font-extrabold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        Add a Book to the Library
      </h1>
      <BookForm />
      <div className="mt-6 text-center"></div>
    </div>
  );
}
