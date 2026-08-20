const { Router } = require("express");
const vibrationController = require("../controllers/vibrationController");

const router = Router();

router.post("/vibracao", vibrationController.receive);

module.exports = router;
