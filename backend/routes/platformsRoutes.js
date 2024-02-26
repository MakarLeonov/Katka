const express = require('express');
const platformsController = require('../controllers/platformsController');
const router = express.Router();

router.route("/")
    .get(platformsController.getAll)
    .post(platformsController.createNew);

router.route("/:id")
    .get(platformsController.getById)
    .put(platformsController.update)
    .delete(platformsController.delete);

module.exports = router;