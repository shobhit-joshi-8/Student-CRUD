const express = require("express");
const {
  getAllStudentsController,
  getStudentByIdController,
  createStudentConroller,
  updateStudentController,
  deleteStudentController,
} = require("../controllers/studentController");

// router object
const router = express.Router();

// routes

// GET ALL STUDENTS LIST || GET
router.get("/getAll", getAllStudentsController);

// GET STUDENT BY ID
router.get("/get/:id", getStudentByIdController);

// CREATE STUDENT || POST
router.post("/create", createStudentConroller);

// UPDATE STUDENT || PUT
router.put("/update/:id", updateStudentController);

// DELETE STUDENT || DELETE
router.delete("/delete/:id", deleteStudentController);

module.exports = router;
