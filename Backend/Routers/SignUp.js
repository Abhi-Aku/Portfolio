const express = require("express");
const Router = require("../Controller/SignUp");
const router = express.Router();

router.post("/Data", Router.PostData);
router.get("/Data", Router.GetData);

router.post("/api/login", Router.SignUpLogin);

module.exports = router; 
