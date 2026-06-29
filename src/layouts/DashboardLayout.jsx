import Sidebar from "../components/layout/Sidebar";

export default function DashboardLayout({
  children,
}) {
  return (
    <div className="layout">

      <Sidebar />

      <main className="content">

        {children}

      </main>

    </div>
  );
}