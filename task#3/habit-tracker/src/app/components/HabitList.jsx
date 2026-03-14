import HabitItem from "./HabitItem";

function calculateStreak(completedDates) {
  return completedDates.length;
}

function calculateLongestStreak(completedDates) {
  return completedDates.length;
}

export default function HabitList({ habits, onComplete }) {
  return (
    <div>
      {habits.map((habit) => (
        <HabitItem
          key={habit.id}
          name={habit.name}
          description={habit.description}
          streak={calculateStreak(habit.completedDates)}
          longestStreak={calculateLongestStreak(habit.completedDates)}
          completedDates={habit.completedDates}
          onComplete={() => onComplete(habit.id)}
        />
      ))}
    </div>
  );
}