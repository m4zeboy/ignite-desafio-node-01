import { database } from "../database/index.js";

export function completeTask(req, res) {
  const { id } = req.params;

  const [doesTaksExist] = database.select("tasks", { id });
  
  if(!doesTaksExist) {
    return res.writeHead(404).end();
  }

  if(doesTaksExist.completed_at === null) {
    doesTaksExist.completed_at = new Date();
  } else {
    doesTaksExist.completed_at = null;
  }

  database.update("tasks", id, doesTaksExist);

  res.writeHead(201).end();
}