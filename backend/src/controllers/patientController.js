import prisma from "../utils/prisma.js";

export const createPatient = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      dateOfBirth,
      gender,
      bloodGroup,
      phone,
      email,
      address,
      maritalStatus,
      emergencyName,
      emergencyPhone,
    } = req.body;

    const hospitalNumber = `HMS-${Date.now()}`;

    const patient = await prisma.patient.create({
      data: {
        hospitalNumber,
        firstName,
        lastName,
        dateOfBirth: new Date(dateOfBirth),
        gender,
        bloodGroup,
        phone,
        email,
        address,
        maritalStatus,
        emergencyName,
        emergencyPhone,
      },
    });

    res.status(201).json({
      success: true,
      message: "Patient created successfully.",
      patient,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to create patient.",
    });
  }
};

export const getPatients = async (req, res) => {
  try {
    const patients = await prisma.patient.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    res.json({
      success: true,
      count: patients.length,
      patients,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch patients.",
    });
  }
};

export const getPatientById = async (req, res) => {
  try {
    const id = Number(req.params.id);

    const patient = await prisma.patient.findUnique({
      where: { id },
    });

    if (!patient) {
      return res.status(404).json({
        success: false,
        message: "Patient not found.",
      });
    }

    res.json({
      success: true,
      patient,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch patient.",
    });
  }
};

export const updatePatient = async (req, res) => {
  try {
    const id = Number(req.params.id);

    const patient = await prisma.patient.update({
      where: { id },
      data: req.body,
    });

    res.json({
      success: true,
      message: "Patient updated successfully.",
      patient,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to update patient.",
    });
  }
};

export const deletePatient = async (req, res) => {
  try {
    const id = Number(req.params.id);

    await prisma.patient.delete({
      where: { id },
    });

    res.json({
      success: true,
      message: "Patient deleted successfully.",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to delete patient.",
    });
  }
};

export async function getPatient(req, res) {
  try {
    const patient = await prisma.patient.findUnique({
      where: {
        id: Number(req.params.id),
      },
    });

    if (!patient) {
      return res.status(404).json({
        message: "Patient not found",
      });
    }

    res.json({
      patient,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

export async function deletePatient(req, res) {

  try {

    await prisma.patient.delete({
      where: {
        id: Number(req.params.id),
      },
    });

    res.json({
      success: true,
      message: "Patient deleted successfully",
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

}

export async function updatePatient(req, res) {
  try {
    const patient = await prisma.patient.update({
      where: {
        id: Number(req.params.id),
      },
      data: req.body,
    });

    res.json({
      success: true,
      message: "Patient updated successfully",
      patient,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}