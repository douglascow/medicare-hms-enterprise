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
  return (
    <aside className="w-64 bg-slate-900 text-white flex flex-col">
      <div className="p-6 text-2xl font-bold border-b border-slate-700">
        MediCare HMS
      </div>

      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          <li className="rounded-lg bg-slate-800 px-4 py-3">
            Dashboard
          </li>

          <li className="rounded-lg px-4 py-3 hover:bg-slate-800 cursor-pointer">
            Patients
          </li>

          <li className="rounded-lg px-4 py-3 hover:bg-slate-800 cursor-pointer">
            Doctors
          </li>

          <li className="rounded-lg px-4 py-3 hover:bg-slate-800 cursor-pointer">
            Laboratory
          </li>

          <li className="rounded-lg px-4 py-3 hover:bg-slate-800 cursor-pointer">
            Pharmacy
          </li>

          <li className="rounded-lg px-4 py-3 hover:bg-slate-800 cursor-pointer">
            Revenue
          </li>
        </ul>
      </nav>
    </aside>
  );
}