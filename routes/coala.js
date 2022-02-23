const express = require('express');
const router = express.Router();

router.get('/coala/dashboard', (req, res) => {
    res.render('coala/dashboard')
})

router.get('/coala/new', (req, res) => {
    res.render('coala/new')
})

router.get('/coala/setting', (req, res) =>{
    res.render('coala/setting');
})

module.exports = router;