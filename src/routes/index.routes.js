const router = require('express').Router();
const adminRouter = require('./admin.routes.js');
const galerieRouter = require('./galerie.routes.js');

router.use('/admins', adminRouter);
router.use('/galerie', galerieRouter);

module.exports = router;