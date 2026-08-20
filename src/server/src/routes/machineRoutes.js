const { Router } = require("express");
const machineController = require("../controllers/machineController");

const router = Router();

router.get("/maquinas", machineController.list);
router.get("/maquinas/:id", machineController.getById);

module.exports = router;
