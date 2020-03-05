const express = require('express');
const router = express.Router();

let data = require('../data/data.json')
router.get('/', (req, res) => {

    let pagePhotos = [];
    data.speakers.forEach((speaker) => {
        pagePhotos = pagePhotos.concat(speaker.artwork)
    })
    // console.log(pagePhotos)


    res.render('index', {
        artwork: pagePhotos
    })
})


module.exports = router;