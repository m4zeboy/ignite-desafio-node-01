import { parse } from "csv-parse";
import fs from 'node:fs';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import axios from 'axios';

const __dirname = dirname(fileURLToPath(import.meta.url));


const processFile = async () => {
  const parser = fs.createReadStream(`${__dirname}/file.csv`)
  .pipe(parse({}))
  let counter = 0;
  for await (const record of parser) {
    if(counter !== 0) {
      const [title, description] = record;
      const body = {
        title,
        description
      }
      axios.post("http://localhost:3333/tasks", body);
    };    
    counter++;
  }
}

const records = await processFile();