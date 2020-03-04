const express = require('express');
const router = express.Router();
const body_parser = require('body-parser');
router.use(body_parser.urlencoded({ extended: false }));

router.get('/api', (req, res) => {
    res.send('json data')
})
router.post('/api', (req, res) => {




    res.send()
})
module.exports = router;