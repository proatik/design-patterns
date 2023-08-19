import LibraryCSV from "./LibraryCSV";
import LibraryJSON from "./LirbraryJSON";
import LibraryCsvAdapter from "./LibraryCsvAdapter";
import LibraryJsonAdapter from "./LibraryJsonAdapter";

const clientCode = () => {
  {
    // using the csv-adapter.
    console.log("----- CSV Adapter -----");

    const library = new LibraryCSV();
    const libraryAdapter = new LibraryCsvAdapter(library);

    console.log(libraryAdapter.getBooks());
  }

  {
    // using the json-adapter.
    console.log("----- JSON Adapter -----");

    const library = new LibraryJSON();
    const libraryAdapter = new LibraryJsonAdapter(library);

    console.log(libraryAdapter.getBooks());
  }
};

export default clientCode;
