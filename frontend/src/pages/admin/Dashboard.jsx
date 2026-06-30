import DashboardLayout from "../../layouts/DashboardLayout";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <DashboardLayout>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold">
            Hospital Dashboard
          </h2>

          <p className="text-gray-500 mt-2">
            Welcome back, <strong>{user?.name}</strong>
          </p>

          <p className="text-gray-500">
            Role: {user?.role}
          </p>
        </div>

        <button
          onClick={handleLogout}
          className="rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700"
        >
          Logout
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-xl bg-white p-6 shadow">
          <h3 className="text-gray-500">Patients</h3>
          <p className="mt-2 text-3xl font-bold">1,245</p>
        </div>

        <div className="rounded-xl bg-white p-6 shadow">
          <h3 className="text-gray-500">Doctors</h3>
          <p className="mt-2 text-3xl font-bold">62</p>
        </div>

        <div className="rounded-xl bg-white p-6 shadow">
          <h3 className="text-gray-500">Revenue</h3>
          <p className="mt-2 text-3xl font-bold">₦3.2M</p>
        </div>

        <div className="rounded-xl bg-white p-6 shadow">
          <h3 className="text-gray-500">Occupancy</h3>
          <p className="mt-2 text-3xl font-bold">87%</p>
        </div>
      </div>
    </DashboardLayout>
  );
}