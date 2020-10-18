const express = require('express');
const {
  getBootcamp,
  getBootcamps,
  createBootcamp,
  deleteBootcamp,
  updateBootcamp,
  getBootcampsInRadius,
} = require('../controllers/bootcamps');

// Router to get other resources
const courseRouter = require('./courses');

const router = express.Router();

// Re-route into other resource router
router.use('/:bootcampId/courses', courseRouter);

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
