import { Router } from './lib/router.js';

export const router = new Router();

router.post("/tasks", (req, res) => {
  return res.end();
})