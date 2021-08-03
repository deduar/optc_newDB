const { Router } = require('express');
const newDBController = require('../controlles/newDB');
const imageUploaer = require('../helpers/file-uploader');
//const checkAuth = require('../middleware/check-auth');
const router = Router();

//router.post('/upload',checkAuth.checkAuth,imageUploaer.upload.single('image'),imageController.upload);
router.get('/upload', (req,res,nex) => {
    res.render('./upload/index.ejs');
});
router.post('/upload',newDBController.upload);


module.exports = router;