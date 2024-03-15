import Todo from '../todo.model.js';

export const getTodosService = async () => {
    const todos = await Todo.find({});

    return todos;
};