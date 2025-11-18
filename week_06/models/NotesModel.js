import mongoose, { Schema } from "mongoose";

const NotesSchema = new Schema({
    noteTitle : { type: String }, 
    noteDescirption : { type: String },
    priority : { type : String }, 
    dateAdded : { type : String }, 
    dateUpdated : { type : String }
}) 

const NotesModel = mongoose.model('Notes' , NotesSchema)
export default NotesModel