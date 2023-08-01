import { randomUUID } from 'node:crypto';
import { database } from '../database/index.js';

export async function createTask(req, res) {
  const { 
    title,
    description
  } = req.body;

  const task = {
    id: randomUUID(),
    title,
    description,
    created_at: new Date(),
    updated_at: new Date(),
    completed_at: null
  }

  database.insert("tasks", task);

  return res.writeHead(201).end();

}