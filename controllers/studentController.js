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

module.exports = { getAllStudentsController };
