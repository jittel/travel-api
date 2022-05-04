const router = require('express').Router();
const TripRoutes = require('./category-routes');
const TravelerRoutes = require('./product-routes');
const LocationRoutes = require('./tag-routes');

router.use('/trip', categoryRoutes);
router.use('/traveler', productRoutes);
router.use('/location', tagRoutes);

module.exports = router;
