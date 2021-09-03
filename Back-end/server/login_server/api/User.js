const express = require('express');
const router = express.Router();

//mongodb user model
const User = require('../models/User');

//password handler
const bcrypt = require('bcrypt');


router.post('/signup', (req, res) =>{
    let {name, cpf, password} = req.body;
    name =name.trim();
    cpf = cpf.trim();
    password = password.trim();

    if (name == "" || cpf== "" || password== ""){
        res.json({
            status: "FAILED",
            message: "Empty input fields!"
        });
    } else if (!/^[a-zA-Z]*$/.test(name))   {
        res.json({
            status: "FAILED",
            message: "Invalid name entered"
        });
    } else if (cpf.length <11){
        res.json({
            status: "FAILED",
            message: "Invalid cpf entered"
        });
    } else if (password.length <8) {
        res.json({
            status: "FAILED",
            message: "Password is too short!"
        });
    } else {
        //if exists
        User.find({cpf}).then(result => {
            if (result.length) {
                //exists
                res.json({
                    status: "FAILED",
                    message: "User with the  provided cpf already exists!"
                });
            } else {
                //try to create new user

                //password handling
                const saltRounds = 10;
                bcrypt.hash(password, saltRounds).then(hashedPassword => {
                    const newUser = new User({
                        name,
                        cpf,
                        password: hashedPassword,
                    });

                    newUser.save().then(result => {
                        res.json({
                            status: "SUCCESS",
                            message: "Signup successful!"
                        });
                    })
                    .catch(err => {
                        res.json({
                            status: "FAILED",
                            message: "An error occured while saving user account!" 
                        })
                    })
                })
                .catch(err => {
                    res.json({
                        status: "FAILED",
                        message: "An error occured while hashing password!" 
                    })
                })
            }
        }).catch(err => {
            console.log(err);
            res.json({
                status: "FAILED",
                message: "An error occured while checking for existing user!"
            });
        })
    }
})

router.post('/signin', (req, res) =>{
    
})

module.exports = router;