import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../api/axios";

export default function PatientDetails() {

  const { id } = useParams();

  const [patient, setPatient] = useState(null);

  useEffect(() => {
    loadPatient();
  }, []);

  async function loadPatient() {
    try {
      const { data } = await api.get(`/patients/${id}`);

      setPatient(data.patient);

    } catch (err) {
      console.error(err);
    }
  }

  if (!patient) {
    return <h2>Loading patient...</h2>;
  }

  return (

    <div className="space-y-6">

      <h1 className="text-3xl font-bold">

        {patient.firstName} {patient.lastName}

      </h1>

      <div className="rounded-xl bg-white p-6 shadow">

        <p><strong>Hospital No:</strong> {patient.hospitalNumber}</p>

        <p><strong>Gender:</strong> {patient.gender}</p>

        <p><strong>Phone:</strong> {patient.phone}</p>

        <p><strong>Email:</strong> {patient.email}</p>

        <p><strong>Address:</strong> {patient.address}</p>

        <p><strong>Blood Group:</strong> {patient.bloodGroup}</p>

        <p><strong>Marital Status:</strong> {patient.maritalStatus}</p>

      </div>

    </div>

  );

}