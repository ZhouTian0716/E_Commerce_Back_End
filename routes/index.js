const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => {
  res.send("<h1>Please add '/category' or '/product' or '/tag' after api to check route data!</h1>")
});

module.exports = router;