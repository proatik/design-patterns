class LibraryCSV {
  getBooks() {
    const books = [
      { title: "To Kill a Mockingbird", author: "Harper Lee" },
      { title: "1984", author: "George Orwell" },
      { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
      { title: "Pride and Prejudice", author: "Jane Austen" },
      { title: "The Catcher in the Rye", author: "J.D. Salinger" },
    ];

    const headings = ["title", "author"];
    const contents = books.map(({ title, author }) => [title, author]);

    const csv = [headings, ...contents]
      .map(([title, author]) => `${title},${author}`)
      .join("\r\n");

    return csv;
  }
}

export default LibraryCSV;
