import LibraryCSV from "./LibraryCSV";
import LibraryAdapter from "./LibraryAdapter";

class LibraryCsvAdapter implements LibraryAdapter {
  library: LibraryCSV;

  constructor(library: LibraryCSV) {
    this.library = library;
  }

  getBooks(): { [key: string]: string }[] {
    const books = this.library.getBooks();

    const booksString = books.split("\r\n");

    const headings = booksString[0].split(",");

    const contents = booksString
      .slice(1)
      .map((book: string) => book.split(","));

    const json = contents.map((content) => {
      const book: { [key: string]: string } = {};

      headings.forEach((heading, index) => {
        book[heading] = content[index];
      });

      return book;
    });

    return json;
  }
}

export default LibraryCsvAdapter;
