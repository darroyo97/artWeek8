const express = require('express');
const router = express.Router();
let data = require('../data/data.json')


router.get('/speaker', (req, res) => {
    let pagePhotos = []
    data.speakers.forEach((speakerObj) => {
        pagePhotos = pagePhotos.concat(speakerObj.artwork)
    })
    res.render('speaker', {
        pageTitle: 'Speaker List',
        artistName: "",
        artwork: pagePhotos,
        allSpeakers: data.speakers,
        pageID: 'speakerList'
    })
})
router.get('/speaker/:speakerID', (req, res) => {
    res.render('speakers')
})

module.exports = router;