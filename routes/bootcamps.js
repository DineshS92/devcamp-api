const express = require('express');
const {
  getBootcamp,
  getBootcamps,
  createBootcamp,
  deleteBootcamp,
  updateBootcamp,
  getBootcampsInRadius,
} = require('../controllers/bootcamps');

const router = express.Router();

// Get Bootcamps in a radius of zipcode
router.route('/radius/:zipcode/:distance').get(getBootcampsInRadius);

// Routes without ids
router.route('/').get(getBootcamps).post(createBootcamp);

// Routes that need id
router
  .route('/:id')
  .delete(deleteBootcamp)
  .get(getBootcamp)
  .put(updateBootcamp);

module.exports = router;
