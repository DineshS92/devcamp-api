const express = require('express');
const {
  getBootcamp,
  getBootcamps,
  createBootcamp,
  deleteBootcamp,
  updateBootcamp,
  getBootcampsInRadius,
  bootcampPhotoUpload,
} = require('../controllers/bootcamps');

const Bootcamp = require('../models/Bootcamp');
const advancedResults = require('../middleware/advancedResults');

// Router to get other resources
const courseRouter = require('./courses');

const router = express.Router();

const { protect, authorize } = require('../middleware/auth');

// Re-route into other resource router
router.use('/:bootcampId/courses', courseRouter);

// Get Bootcamps in a radius of zipcode
router.route('/radius/:zipcode/:distance').get(getBootcampsInRadius);

router
  .route('/:id/photo')
  .put(protect, authorize('publisher', 'admin'), bootcampPhotoUpload);

// Routes without ids
router
  .route('/')
  .get(advancedResults(Bootcamp, 'courses'), getBootcamps)
  .post(protect, authorize('publisher', 'admin'), createBootcamp);

// Routes that need id
router
  .route('/:id')
  .delete(protect, authorize('publisher', 'admin'), deleteBootcamp)
  .get(getBootcamp)
  .put(protect, authorize('publisher', 'admin'), updateBootcamp);

module.exports = router;
