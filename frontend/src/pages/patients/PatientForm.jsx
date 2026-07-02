import { useState } from "react";
import api from "../../api/axios";
import { toast } from "react-hot-toast";

export default function PatientForm({ onSuccess }) {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    gender: "MALE",
    bloodGroup: "O_POSITIVE",
    phone: "",
    email: "",
    address: "",
    maritalStatus: "SINGLE",
    emergencyName: "",
    emergencyPhone: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await api.post("/patients", form);

      toast.success("Patient added successfully");

      setForm({
        firstName: "",
        lastName: "",
        dateOfBirth: "",
        gender: "MALE",
        bloodGroup: "O_POSITIVE",
        phone: "",
        email: "",
        address: "",
        maritalStatus: "SINGLE",
        emergencyName: "",
        emergencyPhone: "",
      });

      onSuccess();

    } catch (err) {
      toast.error(
        err.response?.data?.message ||
        "Failed to add patient"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-xl shadow p-6 mb-8"
    >
      <h2 className="text-xl font-bold mb-6">
        Add New Patient
      </h2>

      <div className="grid grid-cols-2 gap-4">

        <input
          name="firstName"
          placeholder="First Name"
          value={form.firstName}
          onChange={handleChange}
          className="border p-3 rounded"
          required
        />

        <input
          name="lastName"
          placeholder="Last Name"
          value={form.lastName}
          onChange={handleChange}
          className="border p-3 rounded"
          required
        />

        <input
          type="date"
          name="dateOfBirth"
          value={form.dateOfBirth}
          onChange={handleChange}
          className="border p-3 rounded"
          required
        />

        <input
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          className="border p-3 rounded"
          required
        />

        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="border p-3 rounded"
        />

        <input
          name="address"
          placeholder="Address"
          value={form.address}
          onChange={handleChange}
          className="border p-3 rounded"
        />

      </div>

      <button
        disabled={loading}
        className="mt-6 rounded-lg bg-blue-600 px-6 py-3 text-white"
      >
        {loading ? "Saving..." : "Save Patient"}
      </button>

    </form>
  );
}