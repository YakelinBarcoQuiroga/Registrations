//Models
const { Registrations } = require("../models/registrations.model");

const getAllRegistrations = async (req, res) => {
  try {
    const registrations = await Registrations.findAll();

    res.status(200).json({
      status: "success",
      data: {
        registrations,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const getARegistrations = async (req, res) => {
  try {
    const { id } = req.params;
    const registrations = await Registrations.findOne({ where: { id } });

    if (!registrations) {
      return res.status(404).json({
        status: "error",
        message: "Registrations not found",
      });
    }

    res.status(200).json({
      status: "success",
      data: {
        registrations,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const createRegistrations = async (req, res) => {
  try {
    const { entranceTime, exitTime } = req.body;

    const newRegistrations = await Registrations.create({
      entranceTime,
      exitTime,
    });

    res.status(201).json({
      status: "succes",
      data: { newRegistrations },
    });
  } catch (error) {
    console.log(error);
  }
};

const updateRegistrations = async (req, res) => {
  try {
    const { exitTime } = req.body;
    const { id } = req.params;

    const registrations = await Registrations.findOne({ where: { id } });

    if (!registrations) {
      return res.status(404).json({
        status: "error",
        message: "Registrations not found",
      });
    }

    await registrations.update({ exitTime, status: "out" });

    res.status(200).json({
      status: "succes",
      data: { registrations },
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteRegistrations = async (req, res) => {
  try {
    const { id } = req.params;

    const registrations = await Registrations.findOne({ where: { id } });

    if (!registrations) {
      return res.status(404).json({
        status: "error",
        message: "Registrations not found",
      });
    }

    await registrations.update({ status: "cancelled" });

    res.status(204).json({ status: "success" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllRegistrations,
  createRegistrations,
  updateRegistrations,
  deleteRegistrations,
  getARegistrations,
};
