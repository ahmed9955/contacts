import express from 'express';
import { createTodo, deleteTodo, getTodos, updateTodo } from '../controller/todo.js';

const router = express.Router();

router.get('/',getTodos);
router.post('/',createTodo);
router.patch('/',updateTodo);
router.delete('/',deleteTodo);

export default router