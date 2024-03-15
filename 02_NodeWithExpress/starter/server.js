import express from 'express';
import dotenv from 'dotenv';
import mongoose from "mongoose";
dotenv.config();

import { router as getTodosRouter } from './routes/allTodos.route.js';

// import {router as allTodos} from './routes/alltodos.js';
// import {router as singleTodo} from './routes/singleTodo.route.js';
// import {router as addTodo} from './routes/addTodo.route.js';

const app = express();

const port = process.env.PORT;
const host = process.env.HOST;

try {
    console.log(`Connecting to the database @ ${process.env.DB_URI}`);
    await mongoose.connect(process.env.DB_URI);
    console.log(`Connected to the database @ ${process.env.DB_URI}`);
} catch (err) {
    console.log(err);
}

// main().catch(err => console.log(err));

// app.get(`/`, (req, res) => {
//     res.send(`Hello World`);
// });

app.use(`/`, getTodosRouter);
// app.use(`/todo`, singleTodo);
// app.use(`/add`, addTodo);

const server = app.listen(port, host, () => {
    const SERVERHOST = server.address().address;
    const SERVERPORT = server.address().port;
    console.log(`Server is running on http://${SERVERHOST}:${SERVERPORT}`);
})