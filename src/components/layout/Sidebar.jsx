import {
  LayoutDashboard,
  Users,
  Stethoscope,
  Pill,
  FlaskConical,
  DollarSign,
  LogOut
} from "lucide-react";

import { useAuth }
from "../../context/AuthContext";

export default function Sidebar() {

  const { logout } = useAuth();

  return (

    <aside className="sidebar">

      <h2>MediCare</h2>

      <nav>

        <a href="#">
          <LayoutDashboard />
          Dashboard
        </a>

        <a href="#">
          <Users />
          Patients
        </a>

        <a href="#">
          <Stethoscope />
          Doctors
        </a>

        <a href="#">
          <FlaskConical />
          Laboratory
        </a>

        <a href="#">
          <Pill />
          Pharmacy
        </a>

        <a href="#">
          <DollarSign />
          Revenue
        </a>

      </nav>

      <button
        onClick={logout}
      >
        <LogOut />
        Logout
      </button>

    </aside>
  );
}