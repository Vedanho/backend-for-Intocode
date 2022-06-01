const { Router } = require("express");

const { studentControllers } = require("../Controllers/student.controllers");

const router = Router();

router.post("/student", studentControllers.createUser);
router.delete("/student", studentControllers.deleteStudent);
router.get("/student", studentControllers.getStudent);
router.patch("/student", studentControllers.updateUser);
router.get("/student/group/:id", studentControllers.getStudentByGroup);
router.get("/student/status/:id", studentControllers.getStudentByStatus);
router.get("/student/payment/:id", studentControllers.getStudentByPayment);
router.get("/student/offer/:id", studentControllers.getStudentOffer);

module.exports = router;
