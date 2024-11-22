import { NextApiRequest, NextApiResponse } from "next";
import myBooks from "../../data/books.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    // Send the list of books as JSON
    res.status(200).json(myBooks);
  } else {
    // Handle unsupported request methods
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
