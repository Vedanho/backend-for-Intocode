const { Router } = require("express");

const { statusControllers } = require("../Controllers/status.controllers")

const router = Router();

router.post("/status", statusControllers.createStatus);
router.delete("/status/:id", statusControllers.deleteStatus);

module.exports = router