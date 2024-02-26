const express = require('express');
const subscriptionsController = require('../../controllers/Xbox/subscriptionsController');
const router = express.Router();

router.route("/")
    .get(subscriptionsController.getAll)
    .post(subscriptionsController.createNew)

router.route("/:id")
    .get(subscriptionsController.getById)
    .put(subscriptionsController.update)
    .delete(subscriptionsController.delete)

    router.route("/search/:name")
        .get(subscriptionsController.getByName)

module.exports = router;