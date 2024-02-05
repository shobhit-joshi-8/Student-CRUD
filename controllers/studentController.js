const mySqlPool = require("../config/db");

// GET ALL STUDENTS LIST
const getAllStudentsController = async (req, res) => {
  try {
    const data = await mySqlPool.query("SELECT * FROM students");
    if (!data) {
      return res.status(404).send({
        success: false,
        message: "No Records Found",
      });
    }
    res.status(200).send({
      success: true,
      message: "All Students Record",
      totalStudents: data[0].length,
      data: data[0],
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error In Get All Students API",
      error,
    });
  }
};

// GET STUDENT BY ID
const getStudentByIdController = async (req, res) => {
  try {
    const studentId = req.params.id;
    if (!studentId) {
      return res.status(404).send({
        success: false,
        message: "Invalid Or Provide Student Id",
      });
    }

    const data = await mySqlPool.query(`SELECT * FROM students WHERE id = ?`, [
      studentId,
    ]);
    if (!data) {
      return res.status(404).send({
        success: false,
        message: "No Records Found",
      });
    }
    res.status(200).send({
      success: true,
      studentDetails: data[0],
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error In Get Student By Id API",
      error,
    });
  }
};

// CRETE STUDENT
const createStudentConroller = async (req, res) => {
  try {
    // const {name, roll_no,class} = req.body;
    const { name, roll_no, medium, fees } = req.body;
    if ((!name, !roll_no, !medium, !fees)) {
      return res.status(500).send({
        success: false,
        message: "Please Provide All Fields",
      });
    }
    const data = await mySqlPool.query(
      `INSERT INTO students (name, roll_no, fees, medium) VALUES (?, ? , ?, ?)`,
      [name, roll_no, fees, medium]
    );
    if (!data) {
      return res.status(404).send({
        success: false,
        message: "Error In Insert Query",
      });
    }
    res.status(201).send({
      success: true,
      message: "New Student Record Created",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error In Create Student API",
      error,
    });
  }
};

// UPDATE STUDENT
const updateStudentController = async (req, res) => {
  try {
    const studentId = req.params.id;
    if (!studentId) {
      return res.status(404).send({
        success: false,
        message: "Invalid Id Or Provide Id",
      });
    }
    const { name, roll_no, fees, medium } = req.body;
    if (!name || !roll_no || !fees || !medium) {
      return res.status(500).send({
        success: false,
        message: "Please Provide All Details",
      });
    }
    const data = await mySqlPool.query(
      `UPDATE students SET name = ?, roll_no = ?, fees = ?, medium = ? Where id = ?`,
      [name, roll_no, fees, medium, studentId]
    );
    if (!data) {
      return res.status(500).send({
        success: false,
        message: "Error In Update Data",
      });
    }
    res.status(200).send({
      success: true,
      message: "Student Details Updated",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error In Update Student API",
      error,
    });
  }
};

// DELETE STUDENT
const deleteStudentController = async (req, res) => {
  try {
    const studentId = req.params.id;
    if (!studentId) {
      return res.status(404).send({
        success: false,
        message: "Please Provide Student Id Or Valid Student Id",
      });
    }
    await mySqlPool.query(`DELETE FROM students WHERE id = ?`, [studentId]);
    res.status(200).send({
      success: true,
      message: "Student Deleted Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error In Delete Student API",
      error,
    });
  }
};

module.exports = {
  getAllStudentsController,
  getStudentByIdController,
  createStudentConroller,
  updateStudentController,
  deleteStudentController,
};
