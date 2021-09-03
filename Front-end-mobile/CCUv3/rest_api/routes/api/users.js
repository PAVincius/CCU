const express = require('express');
const router = express.Router();
//users model
const Users = require('../../models/Users');


// @routes GET api user
// @desc GET All users
router.get('/', async(req, res) => {
    try {
        const users = await Users.find();
        if(!users) throw Error("No Users");
        res.status(200).json(users); 
    } catch(err) {
        res.status(400).json({ msg: err })
    }
});

// @routes GET api users
// @desc GET An user
router.get('/:id', async(req, res) => {
    try {
        const user = await Users.findById(req.params.id);
        if(!user) throw Error("No Users");
        res.status(200).json(user); 
    } catch(err) {
        res.status(400).json({ msg: err })
    }
});

// @routes POST api users
// @desc Create An post
router.post('/', async(req, res) => {
    const newUser = new Users(req.body);
    try {
        const user = await newUser.save();
        if(!user) throw Error("Something weng wrong while saving the user");
        res.status(200).json(user);     
    } catch(err) {
        res.status(400).json({ msg: err })
    }
});

// @routes DELETE api/user/:id
// @desc DELETE An user
router.delete('/:id', async(req, res) => {
    try {
        const user = await Users.findByIdAndDelete(req.params.id);
        if(!user) throw Error("No user found!");
        res.status(200).json({ success: true }); 
    } catch(err) {
        res.status(400).json({ msg: err })
    }
});

// @routes UPDATE api/user/:id
// @desc GET All An post
router.patch('/:id', async(req, res) => {
    try {
        const user = await Users.findByIdAndUpdate(req.params.id, req.body);
        if(!user) throw Error("Something weng wrong while updating the user!");
        res.status(200).json({ success: true }); 
    } catch(err) {
        res.status(400).json({ msg: err })
    }
});

module.exports = router;