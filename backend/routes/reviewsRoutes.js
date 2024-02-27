const express = require('express');
const reviewsController = require('../controllers/reviewsController');
const router = express.Router();

router.route("/")
    .get(reviewsController.getAll)
    .post(reviewsController.createNew);

router.route("/:id")
    .get(reviewsController.getById)
    // .put(reviewsController.update)
    .put(reviewsController.changePublishStatus)
    .delete(reviewsController.delete);

module.exports = router;