const { Router } = require("express");
const alertController = require("../controllers/alertController");

const router = Router();

router.get("/alertas", alertController.list);

module.exports = router;
