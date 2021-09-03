const express = require('express');
const router = express.Router();
//users model
const Acoes = require('../../models/Acoes');


// @routes GET api action  
// @desc GET All actions
router.get('/', async(req, res) => {
    try {
        const acoes = await Acoes.find();
        if(!acoes) throw Error("No Actions");
        res.status(200).json(acoes); 
    } catch(err) {
        res.status(400).json({ msg: err })
    }
});

// @routes GET api actions
// @desc GET An action
router.get('/:id', async(req, res) => {
    try {
        const acoes = await Acoes.findById(req.params.id);
        if(!acoes) throw Error("No Actions");
        res.status(200).json(acoes); 
    } catch(err) {
        res.status(400).json({ msg: err })
    }
});

// @routes POST api action
// @desc Create An action
router.post('/', async(req, res) => {
    const newAcao = new Acoes(req.body);
    try {
        const acao = await newAcao.save();
        if(!acao) throw Error("Something weng wrong while saving the Action");
        res.status(200).json(acao);     
    } catch(err) {
        res.status(400).json({ msg: err })
    }
});

// @routes DELETE api/acao/:id
// @desc DELETE An user
router.delete('/:id', async(req, res) => {
    try {
        const acao = await Acoes.findByIdAndDelete(req.params.id);
        if(!acao) throw Error("No user found!");
        res.status(200).json({ success: true }); 
    } catch(err) {
        res.status(400).json({ msg: err })
    }
});

// @routes UPDATE api/acao/:id
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