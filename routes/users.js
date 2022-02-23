const express = require('express');
const router = express.Router();

router.get('/register', (req, res) => {
    res.render('users/register');
});

router.get('/login', (req, res) => {
    res.render('users/login');
})

router.get('/logout', (req, res) => {
    req.logout();
    req.flash('success', "Goodbye!");
    res.redirect('/');
})

module.exports = router;