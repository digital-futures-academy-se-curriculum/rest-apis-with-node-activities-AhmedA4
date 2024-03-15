import express from "express";
import Todo from '../todo.model.js';
import { getTodos } from "../controllers/getTodos.controller.js";

export const router = express.Router();

router.route(`/`).get(getTodos);

// router.route(`/`)
//     .get((req, res) => {
//         Todo.find().then(todos => {
//             res.json(todos); // Resolve the promise and send the todos
//         }).catch(error => {
//             res.status(404).send(`Not found`); // Handle any errors
//         });
//     });

// router.route(`/`)
//     .get((req, res) => {
//     Todo.find((error, todos) => {
//         error ? res.status(404).send(`Not found`) : res.json(todos);
//         });
//     });
