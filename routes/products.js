const express = require('express');
const router = express.Router();
const {filteredResults} = require('../controller/controller');

router.get('/',filteredResults)


module.exports = router;

