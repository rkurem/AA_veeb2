const express = require("express");

const checkLogin = require("../src/checkLogin");

const router = express.Router();
//k6ik siinsed marsruudid kasutavad vahevara:
router.use(checkLogin.isLogin);

const {
	photogalleryHome,
	photogalleryPage} = require("../controllers/photogalleryControllers");

router.route("/").get(photogalleryHome);

//lisame dünaamilise, parameetriga marsruudi
router.route("/:page").get(photogalleryPage);

module.exports = router;