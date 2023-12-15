const express = require("express");
const router = express.Router();
const ViolateControllers = require("../controllers/violates");
router.get("/violates", ViolateControllers.GetAllViolate);
router.post("/violates", ViolateControllers.CreateViolate);
router.put("/violates", ViolateControllers.EditViolate);
router.delete("/violates/:id", ViolateControllers.deleteViolate);

module.exports = router;
