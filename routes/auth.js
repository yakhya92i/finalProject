const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = express.Router();

// Inscription d'un utilisateur
router.post('/register', async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const user = new User({ username, email, password });
        await user.save();
        res.status(201).send('User registered successfully');
    } catch (err) {
        res.status(400).send('Error registering user');
    }
});

// Connexion d'un utilisateur
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).send('Invalid email or password');
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).send('Invalid email or password');
        }

        const token = jwt.sign({ id: user._id }, 'secret', { expiresIn: '1h' });
        res.status(200).json({ token });
    } catch (err) {
        res.status(500).send('Server error');
    }
});

module.exports = router;