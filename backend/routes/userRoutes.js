const express = require('express');
const userCantroller = require('../controllers/UserCantroller');

const router = express.Router();

router.get("/", userCantroller.getAllUser);
router.post("/", userCantroller.createUser);

module.exports = router;