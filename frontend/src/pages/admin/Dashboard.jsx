import DashboardLayout from "../../layouts/DashboardLayout";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <h2 className="mb-6 text-3xl font-bold">
        Hospital Dashboard
      </h2>

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