const express = require('express');
const gamesController = require('../../controllers/Xbox/gamesController');
const router = express.Router();

router.route("/")
    .get(gamesController.getAll)
    .post(gamesController.createNew)

router.route("/:id")
    .get(gamesController.getById)
    .put(gamesController.update)
    .delete(gamesController.delete)

router.route("/search/:name")
    .get(gamesController.getByName)

module.exports = router;