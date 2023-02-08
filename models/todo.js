import mongoose from "mongoose";
import todoSchema from "../schemas/todo.js";

const todo = mongoose.model('todo', todoSchema);

export default todo;