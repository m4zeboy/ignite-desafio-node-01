import { createTask } from './controllers/create-task.js';
import { listTasks } from './controllers/list-tasks.js'
import { updateTask } from './controllers/update-task.js';
import { Router } from './lib/router.js';

export const router = new Router();

router.post("/tasks", createTask);
router.get("/tasks", listTasks);
router.put("/tasks/:id", updateTask)