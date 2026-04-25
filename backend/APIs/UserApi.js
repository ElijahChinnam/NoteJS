const express = require('express');
const mongoose = require('mongoose');
const User = require('../Models/UserModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const router = express.Router();

router.post('/register', async (req, res) => {

    const {username, email, password} = req.body;
    try{
        const hashedPassword = await bcrypt.hash(password, 10);
        let response = await User.insertOne({username: username, email: email, password: hashedPassword});
        res.send({'message': 'User Entered Successfully'});
    } catch (error){
        res.send({'message': 'error'});
    }

});

router.post('/login', async (req, res) => {

    const {username, password} = req.body;
    let user = await User.findOne({username: username});
    if(!user){
        res.send({'message': 'user not found'});
        return;
    }
    let compared = bcrypt.compare(user.password, await bcrypt.hash(password, 10));
    if(!compared){
        res.send({'message': 'wrong password'});
        return;
    }

    const token = jwt.sign({_id: user._id, username: user.username, password: user.password}, 'key', {expiresIn: '1h'});

    res.send({ user: user, token: token });

});

router.post('/fetchUser', require('../Middlewares/AuthMiddleware') , async (req, res) => {
    let user = await User.findOne({username: req.user.username});
    res.send(user);
});

router.put('/update', async (req, res) => {
    const {username, email, password} = req.body;
    let response = await User.updateOne({email: email},{$set : {password: password, username: username}});
    res.send({'message': 'User Updated'});
});

router.delete('/delete', async (req, res) => {
    const {username} = req.body;
    let response = await User.deleteOne({username: username});
    res.send({'message': 'User Deleted'});
});

module.exports = router;