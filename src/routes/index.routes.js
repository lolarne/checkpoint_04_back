const router = require('express').Router();
const adminRouter = require('./admin.routes.js');
const galerieRouter = require('./galerie.routes.js');
const uploadRouter = require('./upload.routes.js');

router.use('/admins', adminRouter);
router.use('/galerie', galerieRouter);
router.use('/upload', uploadRouter);

module.exports = router;