import BookList from "@/components/BookList";

import Link from "next/link";
export default async function Books() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="bg-blue-700 text-white p-6">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">My Book Library</h1>
          <nav>
            <Link href="/" className="text-white hover:text-gray-300 mr-4">
              Home
            </Link>
            <Link href="/add" className="text-white hover:text-gray-300">
              Add a Book
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow p-6">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-8">
          Browse Our Collection
        </h2>

        {/* Book List */}
        <BookList />
      </main>

      {/* Footer */}
      <footer className="bg-blue-700 text-white p-4">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} My Book Library</p>
        </div>
      </footer>
    </div>
  );
}
