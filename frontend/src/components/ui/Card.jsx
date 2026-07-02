export default function Card({ children }) {
  return (
    <div className="rounded-xl bg-white shadow p-6">
      {children}
    </div>
  );
}