import { Router } from './lib/router.js';
import { createTask } from './controllers/create-task.js';
import { listTasks } from './controllers/list-tasks.js'
import { updateTask } from './controllers/update-task.js';
import { deleteTask } from './controllers/delete-task.js';
import { completeTask } from './controllers/complete-task.js';

export const router = new Router();

router.post("/tasks", createTask);
router.get("/tasks", listTasks);
router.put("/tasks/:id", updateTask)
router.delete("/tasks/:id", deleteTask);
router.patch("/tasks/:id/complete", completeTask);