const router = require('express').Router();
const controller = require('./controllers');

router.get('/character/', controller.character.getCharacter);

module.exports = router;
