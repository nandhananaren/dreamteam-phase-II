 
 {
  return (
    <div className="border rounded-lg p-4 shadow mb-4">

      <h2 className="text-lg font-semibold">
        {name}
      </h2>

      <p className="text-sm text-gray-600">
        {description}
      </p>

     <p className="text-sm text-gray-600">
    Total Completions: {streak}
    </p>

      <p className="text-sm text-gray-600">
        Longest Streak: {longestStreak}
      </p>

    <button
    onClick={onComplete}
    className="mt-3 px-2 py-1 border border-black text-sm"
  >
  Mark Complete
</button>

    </div>
  );
}