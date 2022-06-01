const { Router } = require("express");

const { groupControllers } = require("../Controllers/group.controllers");

const router = Router();

router.post("/group", groupControllers.createGroup);
router.delete("/group", groupControllers.deleteGroup);
router.get("/group", groupControllers.getGroup);
router.patch("/group", groupControllers.updateGroup);
router.get("/group/week", groupControllers.getGroupByWeek);
router.get("/group/finish", groupControllers.getFinishGroup)

module.exports = router;
