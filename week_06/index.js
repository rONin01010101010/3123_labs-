 import express from 'express'
import notes from './routes/NoteRoutes'
 const app = express()

 app.use('notes', notes )