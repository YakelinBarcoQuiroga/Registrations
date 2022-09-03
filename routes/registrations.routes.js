const express = require("express");

//Controllers
const {
  getAllRegistrations,
  createRegistrations,
  updateRegistrations,
  deleteRegistrations,
  getARegistrations,
} = require("../controllers/registrations.controller");

const registrationsRouter = express.Router();

registrationsRouter.get("/", getAllRegistrations);

registrationsRouter.get("/:id", getARegistrations);

registrationsRouter.post("/", createRegistrations);

registrationsRouter.patch("/:id", updateRegistrations);

registrationsRouter.delete("/:id", deleteRegistrations);

module.exports = { registrationsRouter };
