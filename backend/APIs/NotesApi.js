const express = require('express');
const mongoose = require('mongoose');
const User = require('../Models/UserModel');
const Note = require('../Models/NoteModel')
const router = express.Router();

router.post('/notes', async (req, res) => {
    const {username} = req.body;
    let notes = await Note.find({username: username});
    res.send(notes);
});

router.post('/publicNotes', async (req, res) => {
    let notes = await Note.find({type: 'public'});
    res.send(notes);
});

router.post('/create', async (req, res) => {
    const {username, title, note, type} = req.body;
    let response = await Note.insertOne({username: username, title: title, note: note, type: type});
    res.send({'message': 'Note Created'});
});

router.put('/edit', async (req, res) => {
    const {_id, title, note, type} = req.body;
    let response = await Note.updateOne({_id: _id}, {$set: {title: title, note: note, type: type}});
    res.send({'message': 'Note Updated'});
});

router.delete('/delete', async (req, res) => {
    const {_id} = req.body;
    let response = await Note.deleteOne({_id: _id});
    res.send({'message': 'Note Deleted'});
});


module.exports = router;