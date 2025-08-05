export default function Progress({ value, label }) {
  return (
    <div className="space-y-1">
      <div className="text-sm font-medium text-white">{label}</div>
      <div className="w-full h-6 bg-white bg-opacity-20 rounded-md overflow-hidden border border-white">
        <div
          className="h-full bg-blue-700 text-white text-sm font-semibold flex items-center justify-end pr-2 transition-all duration-300 ease-in-out"
          style={{ width: `${value}%` }}
        >
          {value}%
        </div>
      </div>
    </div>
  );
}
