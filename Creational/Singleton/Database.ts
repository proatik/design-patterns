class Database {
  private static instance: Database;

  private constructor() {}

  public static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
      console.log("Database successfully connected.");
    } else {
      console.log("Database already connected.");
    }

    return Database.instance;
  }

  public query(query: string): void {
    console.log(query);
    console.log("query executed successfully.");
    console.log("----------------------------");
  }
}

export default Database;
