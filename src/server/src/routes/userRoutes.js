const { Router } = require("express");
const userController = require("../controllers/userController");

const router = Router();

router.get("/users", userController.list);
router.post("/users", userController.create);

module.exports = router;
