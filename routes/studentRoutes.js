const express = require("express");
const {
  getAllStudentsController,
  getStudentByIdController,
  createStudentConroller,
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

module.exports = router;
