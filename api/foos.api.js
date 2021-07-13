const express = require('express');
const router = express.Router();
let { foos } = require('../data/foos.json')

// CREATE
const admissleFooParams = ['firstName', 'lastName']
router.post('/', (req, res) => {
    const foo = {}
    for (const param of admissleFooParams) {
        if (req.body[param]) foo[param] = req.body[param];
    }

    foo.fullName = req.body.firstName + " " + req.body.lastName
    foos.push(foo)
    res.send(foo)
})

// READ
router.get('/', (req, res) => {
    res.send(foos)
})

// UPDATE
router.patch('/:id', (req, res) => {
    const idx = foos.findIndex((f) => f.id === parseInt(req.params.id))
    const foo = foos[idx]
    for (const param of admissleFooParams) {
        if (req.body[param]) foo[param] = req.body[param];
    }
    foo.fullName = req.body.firstName + " " + req.body.lastName
    res.send(foo)
})

// DELETE
router.delete('/:id', (req, res) => {
    foos = foos.filter(f => f.id !== parseInt(req.params.id))
    res.send(foos)
})

module.exports = router;