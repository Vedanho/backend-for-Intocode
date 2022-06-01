const { Router } = require("express");

const router = Router();

router.use(require("./group.routes"));
router.use(require("./note.routes"));
router.use(require("./student.routes"));
router.use(require("./status.routes"));
router.use(require('./payment.routes'))

module.exports = router;
