import NotesModel from '../models/NotesModel.js';
import noteModel from '../models/NotesModel.js'
import express from 'express'
import mongoose from 'mongoose';
const noteModel = require('../models/Notes.js');
const mongoose = mongoose();
const express = require('express');
const noteRoutes = express.Router();
//TODO - Create a new Note
//http://mongoosejs.com/docs/api.html#document_Document-save


noteRoutes.post('/notes', async (req, res) => {
    // Validate request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
   const Notes = new noteModel(req.body);
      try {
        await Notes.save()
        res.status(201).send(Notes)
    }catch(err){
        res.status(500);
    }
});

//TODO - Retrieve all Notes
//http://mongoosejs.com/docs/api.html#find_find
noteRoutes.get('/notes', async(req, res) => {
    // Validate request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
  
const notes = await noteModel.find({})
     try {
        res.send(notes).status(201)
     }catch(err){
        res.status(500).send(err)
     }
});

//TODO - Retrieve a single Note with noteId
//http://mongoosejs.com/docs/api.html#findbyid_findById
noteRoutes.get('/notes/:noteId', async(req, res) => {
    // Validate request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
  
    const note = await noteModel.find({ _id : _id})
    try{
        res.send(note).status(201)
    }catch {
        res.status(500).send(err)
    }

});

//TODO - Update a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandupdate_findByIdAndUpdate
noteRoutes.put('/notes/:noteId', async (req, res) => {
    // Validate request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
  
    const note = await noteModel.findByIdAndDelete({_id : _id})
    try{
        res.send(note).status(201)
    }catch(err){
        res.send(err).status(500)
    }
});

//TODO - Delete a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandremove_findByIdAndRemove
noteRoutes.delete('/notes/:noteId', async(req, res) => {
    // Validate request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }

    const note = await NotesModel.findByIdAndDelete({
        _id :_id
    })
    
    try {
        res.send(note).status(500)
    }catch {
        res.send(note).status(500)
    }
});

module.exports = noteRoutes;
