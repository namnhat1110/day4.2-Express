const express = require('express');
const router = express.Router();

// Foos
const foosApi = require('./foos.api')
router.use('/foos', foosApi)


module.exports = router;
