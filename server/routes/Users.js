const express = require("express");
const router = express.Router();
const { Users } = require("../models");
const bcryp = require("bcrypt")

router.post('/', async (req, res) => {
  const {username,password} = req.body;
  bcryp.hash(password,10).then((hash)=>{
    Users.create({
        username:username,
        password:hash,
    })
    res.json("SUCCES")
  })
});

router.post("/login",async (req,res) =>{
    const {username,password} = req.body;
    const user = await Users.findOne({ where: {username:username}});
    if (!user) res.json({error:"User doesn't exits"});
    bcryp.compare(password,user.password).then((match)=>{
        if(!match) res.json({error:"Wrong Username And Password COmbination"});
        res.json("You logged in!!");
    })
});

module.exports = router;