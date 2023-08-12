const router = require("express").Router();
const adminCtrl = require("../../../controllers/admin.controller");

router.get("/", adminCtrl.getAdmins);

router.put("/verify", adminCtrl.verifyAdmin);

router.post("/", adminCtrl.createAdmin);

module.exports = router;
