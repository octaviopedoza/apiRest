const multer = require('multer')
const express = require('express')
const router = express.Router()
const uploadMiddleware = require('../utils/handleStorage')
const {createItem} = require('../controllers/storage')

//Todo http://localhost:3001/storage

router.post("/", uploadMiddleware.single("myfile"), createItem);


module.exports = router;