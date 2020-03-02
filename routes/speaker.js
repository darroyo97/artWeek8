const express = require('express');
const router = express.Router();

router.get('/speaker', (req, res) => {
    res.render('speaker')
})

module.exports = router;