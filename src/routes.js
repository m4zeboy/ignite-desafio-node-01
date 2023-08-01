import { createTask } from './controllers/create-task.js';
import { Router } from './lib/router.js';

export const router = new Router();

router.post("/tasks", createTask);