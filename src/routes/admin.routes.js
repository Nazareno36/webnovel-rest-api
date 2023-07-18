const { Router } = require("express");
const router = Router();
const adminCtrl = require("../controllers/admin.controller");

router.get("/", adminCtrl.getAdmins);

router.post("/verify", adminCtrl.verifyAdmin);

router.post("/", adminCtrl.createAdmin);

module.exports = router;
