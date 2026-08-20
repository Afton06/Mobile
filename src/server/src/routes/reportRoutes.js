const { Router } = require("express");
const reportController = require("../controllers/reportController");

const router = Router();

router.get("/relatorios", reportController.get);

module.exports = router;
