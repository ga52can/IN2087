"use strict";

const express        = require('express');
const router         = express.Router();
const middlewares    = require('../middlewares');
const MeController = require('../controllers/me');
const multer = require('multer');


const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    console.log('testting here' + file)
    cb(null, './uploads/');
  },
  filename: function(req, file, cb) {
    cb(null, new Date().toISOString() + file.originalname);
  }
});

const upload = multer({storage: storage});

// get info of (this) user
router.get('/info',middlewares.checkAuthentication,MeController.info)

router.get('/wants',middlewares.checkAuthentication,MeController.wants)
router.post('/wants',middlewares.checkAuthentication,MeController.addWants)

router.get('/offers',middlewares.checkAuthentication,MeController.offers)
router.post('/offers',middlewares.checkAuthentication,MeController.addOffers)


router.post('/toPremium',middlewares.checkAuthentication,MeController.toPremium)

router.post("/upload", upload.single('image'), (req, res, next) => {
  console.log(req.file)
  res.status(200).json({path: req.file.path});
});

module.exports = router
