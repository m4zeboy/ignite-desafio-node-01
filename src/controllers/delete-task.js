import { database } from "../database/index.js";

export function deleteTask(req, res) {
  const { id } = req.params;

  const [doesTaskExist] = database.select("tasks", { id });

  if(!doesTaskExist) {
    return res.writeHead(404).end();
  }

  database.delete("tasks", id);
  return res.writeHead(204).end();
}