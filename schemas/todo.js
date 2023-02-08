import mongoose from "mongoose";

const todoSchema = new mongoose.Schema ({
title: String,
description: String,
dueAt: Date,
completedAt: Date,
deletedAt: Date,
createdAt: { type: Date, default: Date.now },
})

export default todoSchema;