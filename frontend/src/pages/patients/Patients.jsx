import { useEffect, useState } from "react";
import api from "../../api/axios";
import PatientForm from "./PatientForm";
import PatientSearch from "../../components/patients/PatientSearch";
import EditPatientModal from "../../components/patients/EditPatientModal";
import { useNavigate } from "react-router-dom";



export default function Patients() {

    const [patients, setPatients] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const [search, setSearch] = useState("");
    const [editingPatient, setEditingPatient] = useState(null);
    const [openModal, setOpenModal] = useState(false);

    const filteredPatients = patients.filter((patient) =>
        `${patient.firstName} ${patient.lastName}`
            .toLowerCase()
            .includes(search.toLowerCase())
    );

    const handleEdit = (patient) => {
        setEditingPatient(patient);
        setOpenModal(true);
    };

    const handleDelete = async (id) => {

    const confirmed = window.confirm(
        "Are you sure you want to delete this patient?"
        );

    if (!confirmed) return;

        try {

        await api.delete(`/patients/${id}`);

        fetchPatients();

    } catch (error) {

    console.error(error);

  }

};

    useEffect(() => {
        fetchPatients();
    }, []);

   async function fetchPatients() {
  try {
    setLoading(true);

    const response = await api.get("/patients");

    setPatients(response.data.patients);
  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }

}
   
    if (loading) {
        return <h2>Loading patients...</h2>;
    }

    return (

        <div> 
            <PatientForm onSuccess={fetchPatients} />

            <PatientSearch
                value={search}
                onChange={setSearch}
            />

            <EditPatientModal
                patient={editingPatient}
                open={openModal}
                onClose={() => setOpenModal(false)}
                onSuccess={fetchPatients}
            />

            <h2 className="text-3xl font-bold mb-6">
                Patient Management
            </h2>

            <table className="min-w-full bg-white shadow rounded-lg">
                
                <thead>

                    <tr className="border-b">

                        <th className="p-4 text-left">Hospital No.</th>
                        <th className="p-4 text-left">Name</th>
                        <th className="p-4 text-left">Gender</th>
                        <th className="p-4 text-left">Phone</th>
                        
                        <th className="p-4">Actions</th>
                    </tr>

                </thead>

                <tbody>

                    {filteredPatients.map((patient) => (

                        <tr
                            key={patient.id}
                            className="border-b hover:bg-gray-50"
                        >

                            <td className="p-4">
                                {patient.hospitalNumber}
                            </td>

                            <td className="p-4">
                                {patient.firstName} {patient.lastName}
                            </td>

                            <td className="p-4">
                                {patient.gender}
                            </td>

                            <td className="p-4">
                                {patient.phone}
                            </td>

                            <td className="p-4">

                                <button
                                     onClick={() => navigate(`/patients/${patient.id}`)}
                                     className="rounded bg-blue-600 px-3 py-2 text-white"
                                        >
                                         View
                                </button>

                            </td>
                            <td className="p-4">
  <div className="flex gap-2">

    <button
  onClick={() => handleEdit(patient)}
  className="rounded bg-green-600 px-3 py-2 text-white hover:bg-green-700"
>
  Edit
</button>

    <button
      onClick={() => handleDelete(patient.id)}
      className="rounded bg-red-600 px-3 py-2 text-white hover:bg-red-700"
    >
      Delete
    </button>

  </div>
</td>

                        </tr>

                    ))}

                </tbody>

            </table>

            

        </div>

    );

}