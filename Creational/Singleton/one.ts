import Database from "./Database";

const one = (): void => {
  const db = Database.getInstance();
  db.query("SELECT * FROM ...");
};

export default one;
