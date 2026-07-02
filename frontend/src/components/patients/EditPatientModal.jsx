import { useState, useEffect } from "react";
import api from "../../api/axios";
import { toast } from "react-hot-toast";

export default function EditPatientModal({
  patient,
  open,
  onClose,
  onSuccess,
}) {
  const [form, setForm] = useState({});

  useEffect(() => {
    if (patient) {
      setForm(patient);
    }
  }, [patient]);

  if (!open) return null;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.put(`/patients/${patient.id}`, form);

      toast.success("Patient updated");

      onSuccess();

      onClose();

    } catch (err) {
      toast.error(
        err.response?.data?.message ||
        "Update failed"
      );
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40">

      <div className="w-full max-w-xl rounded-xl bg-white p-6">

        <h2 className="mb-6 text-2xl font-bold">
          Edit Patient
        </h2>

        <form onSubmit={handleSubmit}>

          <input
            className="mb-4 w-full rounded border p-3"
            name="firstName"
            value={form.firstName || ""}
            onChange={handleChange}
          />

          <input
            className="mb-4 w-full rounded border p-3"
            name="lastName"
            value={form.lastName || ""}
            onChange={handleChange}
          />

          <input
            className="mb-4 w-full rounded border p-3"
            name="phone"
            value={form.phone || ""}
            onChange={handleChange}
          />

          <div className="flex justify-end gap-3">

            <button
              type="button"
              onClick={onClose}
              className="rounded bg-gray-400 px-4 py-2 text-white"
            >
              Cancel
            </button>

            <button
              className="rounded bg-blue-600 px-4 py-2 text-white"
            >
              Save
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}