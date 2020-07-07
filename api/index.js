const express= require('express');
const router = express.Router();


const messages = require('./controllers/messages');



const looger = require('./middlewares/logger');

router.use(looger);
router.use('/messages', messages);

module.exports = router;
