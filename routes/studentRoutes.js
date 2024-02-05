const express = require("express");
const {
  getAllStudentsController,
} = require("../controllers/studentController");

// router object
const router = express.Router();

// routes

// GET ALL STUDENTS LIST || GET
router.get("/getAll", getAllStudentsController);

module.exports = router;
