const express = require('express');
const router = express.Router();
//users model
const Mensagens = require('../../models/Mensagens');


// @routes GET api mensagem
// @desc GET  mensagens by id
router.get('/user/:id/mensagem', async(req, res) => {
    try {
        const user = await Mensagens.findById(req.params.id);
        if(!user) throw Error("No Users");
        res.status(200).json(user); 
    } catch(err) {
        res.status(400).json({ msg: err })
    }
});

module.exports = router;