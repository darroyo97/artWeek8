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
    let pagePhotos = []
    let pageSpeakers = []
    data.speakers.forEach((speakerObj) => {
        if (speakerObj.shortname == req.params.speakerID) {
            pageSpeakers.push(speakerObj)
            pagePhotos = speakerObj.artwork

        }
    })
    res.render('speaker', {
        pageTitle: 'Speaker Details',
        artistName: pageSpeakers.artistName,
        artwork: pagePhotos,
        allSpeakers: pageSpeakers,
        pageID: 'pageSpeakers'
    })
})

module.exports = router;