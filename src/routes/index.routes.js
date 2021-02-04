const router = require('express').Router();
const adminRouter = require('./admin.routes.js');
const galerieRouter = require('./galerie.routes.js');
const uploadRouter = require('./upload.routes.js');
const loginRouter = require('./login.routes.js');

router.use('/admins', adminRouter);
router.use('/galerie', galerieRouter);
router.use('/upload', uploadRouter);
router.use('/login', loginRouter);

module.exports = router;