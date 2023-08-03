import { database } from "../database/index.js";

export async function updateTask(req, res) {
  const { id } = req.params;

  let {
    title,
    description
  } = req.body;

  const [doesTaskExist] = database.select("tasks", { id });
  
  if(!doesTaskExist) {
    return res.writeHead(404).end();
  }

  if(!title) {
    title = doesTaskExist.title;
  }
  
  if(!description) {
    description = doesTaskExist.description;
  }

  database.update("tasks", id, { ...doesTaskExist, title, description })
  return res.end(); 

}