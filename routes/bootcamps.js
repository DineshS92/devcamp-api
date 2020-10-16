const express = require('express');
const {
  getBootcamp,
  getBootcamps,
  createBootcamp,
  deleteBootcamp,
  updateBootcamp,
} = require('../controllers/bootcamps');
const router = express.Router();

// Routes without ids
router.route('/').get(getBootcamps).post(createBootcamp);

// Routes that need id
router
  .route('/:id')
  .delete(deleteBootcamp)
  .get(getBootcamp)
  .put(updateBootcamp);

module.exports = router;
