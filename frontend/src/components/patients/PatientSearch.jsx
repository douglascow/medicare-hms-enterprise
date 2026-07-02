export default function PatientSearch({
  value,
  onChange,
}) {
  return (
    <input
      type="text"
      placeholder="Search patient..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="mb-6 w-full rounded-lg border p-3"
    />
  );
}