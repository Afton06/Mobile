const { Router } = require("express");
const userRoutes = require("./userRoutes");
const machineRoutes = require("./machineRoutes");
const alertRoutes = require("./alertRoutes");
const reportRoutes = require("./reportRoutes");
const vibrationRoutes = require("./vibrationRoutes");

const router = Router();

router.use(userRoutes);      // veio no boilerplate original — mantido
router.use(machineRoutes);
router.use(alertRoutes);
router.use(reportRoutes);
router.use(vibrationRoutes);

module.exports = router;
