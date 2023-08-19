interface LibraryAdapter {
  getBooks(): { [key: string]: string }[];
}

export default LibraryAdapter;
