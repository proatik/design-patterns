import Database from "./Database";

const two = (): void => {
  const db = Database.getInstance();
  db.query("SELECT * FROM ...");
};

export default two;
