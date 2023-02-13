import mongoose from "mongoose";
import todoSchema from "../schemas/todo.js";

const todoModel = mongoose.model('todo', todoSchema);

export default todoModel;