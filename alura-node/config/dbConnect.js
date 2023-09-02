import mongoose from "mongoose";

let pass = 123;

mongoose.connect(`mongodb+srv://claudio:${pass}@alura.bn0fdjr.mongodb.net/`);

let db = mongoose.connection;

export default db;
