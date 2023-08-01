import { database } from "../database/index.js";

export function listTasks(req, res) {
  const { search } = req.query;
  
  const tasks = database.select("tasks", search ? {
    title: search,
    description: search
  } : null);

  return res.end(JSON.stringify(tasks));
}