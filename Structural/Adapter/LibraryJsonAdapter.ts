import LibraryJSON from "./LirbraryJSON";
import LibraryAdapter from "./LibraryAdapter";

class LibraryJsonAdapter implements LibraryAdapter {
  private library: LibraryJSON;

  constructor(library: LibraryJSON) {
    this.library = library;
  }

  getBooks(): { [key: string]: string }[] {
    const books = this.library.getBooks();

    const json = JSON.parse(books);

    return json;
  }
}

export default LibraryJsonAdapter;
