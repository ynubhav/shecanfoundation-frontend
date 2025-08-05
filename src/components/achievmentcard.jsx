export default function Achievments({ title, description, unlocked }) {
  return (
    <div className="bg-zinc-900 text-white rounded-md p-4 shadow-md border border-white space-y-2">
      <div className="text-lg font-bold">{title}</div>
      <div className="text-sm text-zinc-300">{description}</div>

      {unlocked ? (
        <button className="w-full rounded-md font-semibold bg-green-700 hover:cursor-pointer hover:bg-green-800 transition py-2 text-sm">
          Claim Certificate
        </button>
      ) : (
        <button
          className="w-full rounded-md font-semibold bg-zinc-700 text-zinc-400 cursor-not-allowed hover:bg-zinc-600 transition py-2 text-sm"
        >
          Locked
        </button>
      )}
    </div>
  );
}
