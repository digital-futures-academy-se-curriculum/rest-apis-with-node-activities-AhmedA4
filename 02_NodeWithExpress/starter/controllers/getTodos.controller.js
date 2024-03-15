import { getTodosService } from "../services/getTodos.service.js";

export const getTodos = async (req, res) => {
    const todos = await getTodosService();
    res.json(todos);
} 