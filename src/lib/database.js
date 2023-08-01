import { readFile, writeFile } from 'node:fs/promises';

const databasePath = new URL("db.json", import.meta.url);

export class Database {
  #database = {};

  constructor() {
    readFile(databasePath, "utf-8")
      .then(data => {
        this.#database = JSON.parse(data);
      })
      .catch(() => {
        this.#persist();
      })
  }

  #persist() {
    writeFile(databasePath, JSON.stringify(this.#database));
  }

  insert(table, data) {
    if(Array.isArray(this.#database[table])) {
      this.#database[table].push(data);
    } else {
      this.#database[table] = [data];
    }

    this.#persist();

    return data;
  }

  select(table, search) {
    let data = this.#database[table] ?? [];
    if(search) {
      data = data.filter(row => {
        const searchEntries = Object.entries(search);
        return searchEntries.some(([key, value]) => {
          const doesAttributeIncludesSearch = row[key].toLowerCase().includes(value.toLowerCase())
          return doesAttributeIncludesSearch;
        })
      })
    }

    return data;
  }
 
}