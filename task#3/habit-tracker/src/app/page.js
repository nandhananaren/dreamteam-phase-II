"use client";

import { useState, useEffect } from "react";
import HabitList from "./components/HabitList";
import { mockHabits } from "./data/mockHabits";

export default function Page() {
  const [habits, setHabits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  const [newHabit, setNewHabit] = useState("");

  const handleAddHabit = () => {
  if (!newHabit.trim()) return;

  const habit = {
    id: Date.now(),
    name: newHabit,
    description: "",
    completedDates: [],
    createdAt: new Date().toISOString().split("T")[0]
  };

  setHabits([...habits, habit]);
  setNewHabit("");
};

  useEffect(() => {
    try {
      setHabits(mockHabits); 
      setLoading(false);
    } catch (err) {
      setError("Failed to load habits");
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <p className="p-6">Loading habits...</p>;
  }

  if (error) {
    return <p className="p-6 text-red-500">{error}</p>;
  }


  const handleMarkComplete = (habitId) => {
  const today = new Date().toISOString().split("T")[0];

  setHabits((prevHabits) =>
    prevHabits.map((habit) => {
      if (habit.id === habitId) {

        if (habit.completedDates.includes(today)) {
          return habit;
        }

        return {
          ...habit,
          completedDates: [...habit.completedDates, today],
        };
      }

      return habit;
    })
  );
};


 return (
  <main className="max-w-xl mx-auto p-6">
    <h1 className="text-2xl font-bold mb-6">Habit Tracker</h1>

    <div className="flex gap-2 mb-4">
      <input
        value={newHabit}
        onChange={(e) => setNewHabit(e.target.value)}
        placeholder="New habit"
        className="border px-2 py-1"
      />

      <button
        onClick={handleAddHabit}
        className="border px-2 py-1"
      >
        Add
      </button>
    </div>

    <HabitList habits={habits} onComplete={handleMarkComplete} />
  </main>
);
}

