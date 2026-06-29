import { useAuth } from "../../context/AuthContext";

export default function Header() {
  const { user } = useAuth();

  return (
    <header className="flex items-center justify-between border-b bg-white px-6 py-4">
      <div>
        <h1 className="text-2xl font-bold">
          Dashboard
        </h1>

        <p className="text-gray-500">
          Welcome back, {user?.name || "Administrator"}
        </p>
      </div>

      <div className="flex items-center gap-3">
        <div className="text-right">
          <p className="font-semibold">
            {user?.name || "Administrator"}
          </p>

          <p className="text-sm text-gray-500">
            {user?.unit || "Admin"}
          </p>
        </div>

        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white">
          {(user?.name || "A")[0].toUpperCase()}
        </div>
      </div>
    </header>
  );
}