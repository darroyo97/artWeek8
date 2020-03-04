const express = require('express');
const router = express.Router();
const body_parser = require('body-parser');
let feedbackData = require('../data/feedback.json')
router.use(body_parser.urlencoded({ extended: false }));

router.get('/api', (req, res) => {
    res.send('json data')
})
router.post('/api', (req, res) => {


    //take data from our file

    feedbackData.unshift(req.body)
    fs.writeFile('../data/feedback.json', JSON.stringify(feedbackData), 'utf8', (err) => {
        if (err) {
            console.log(err)
        }
        res.json(feedbackData)
    })
    res.json({
        "testing": "json data"
    })




})
module.exports = router;