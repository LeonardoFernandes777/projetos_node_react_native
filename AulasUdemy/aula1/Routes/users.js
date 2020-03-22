const express = require('express');
const router = express.Router();
const Users = require('../model/user');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

//Funçoes auxillliares

const createUserToken = (userId) => {
    return jwt.sign({id: userId}, '78951fla', {expiresIn: '7d'}); 
}

router.get('/', async (req, res) => {
    try {
        const users = await Users.find({});
        return res.send(users);
    }
    catch (err) {
        return res.send({ error: 'Erro na Consulta De Usuarios!'})
    }
});

router.post('/create', async (req,res) =>{
    const {email, password} = req.body;

    if (!email || !password) return res.send({ error: 'Dados insuficientes!' });

    try {
        if (await Users.findOne({ email})) return res.send({error: 'Usuario Ja registrado!'});
        const user = await Users.create(req.body);
        user.password = undefined;
        return res.send({user, token: createUserToken(user.id)})
        
    }
    catch (err) {
        return res.send({error: 'Erro ao buscar usuário!'})
    }
});


router.post('/auth', async  (req, res) => {
    const {email, password} = req.body;

    if(!email || !password) return res.send({error: 'Dados Insuficientes'});

    try {
        const user = await Users.findOne({ email }).select('+password');
        if (!user) return res.send({error: 'Usuario Ja registrado!'});
        
        const pass_ok = await bcryptjs.compare(password, user.password);

        if (!pass_ok) return res.send({error: 'Erro ao autenticar usuario'});

        user.password = undefined;
        return res.send({user, token: createUserToken(user.id)});
    }

    catch (err) {
        return res.send({error: 'Erro ao buscar Usuario'});
    }
});

module.exports = router;