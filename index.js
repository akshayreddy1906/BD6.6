const cors = require("cors");
const express = require( "express");
const { getAllEmployees, getEmployeeById } = require("./controllers");
const app = express();
app.use(cors());
app.use(express.json());
app.get("/employees", async (req, res) => { 
  const employees = getAllEmployees(); 
  res.json({ employees });
});
app.get("/employees/details/:id", async (req, res) => { 
  let employee = getEmployeeById(parseInt(req.params.id));
  res.json({employee});
});
module.exports = { app };
