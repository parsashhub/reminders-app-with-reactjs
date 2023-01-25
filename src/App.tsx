import React, { useCallback, useEffect, useState } from "react";
import ReminderList from "./components/ReminderList";
import { Reminder } from "./models/reminder";
import reminderService from "./services/reminder";
import "./App.css";
import NewReminder from "./components/NewReminder";

const App = () => {
  const [reminders, setReminders] = useState<Reminder[]>([]);

  useEffect(() => {
    loadReminder();
  }, []);

  const loadReminder = useCallback(async () => {
    const res = await reminderService.getReminders();
    setReminders(res);
  }, []);

  const removeReminder = useCallback(
    async (id: number) => {
      setReminders(reminders.filter((reminder) => reminder.id !== id));
    },
    [reminders]
  );

  const addReminder = useCallback(
    async (title: string) => {
      const res = await reminderService.addReminder(title);
      setReminders([...reminders, res]);
    },
    [reminders]
  );

  return (
    <div className="App">
      <NewReminder onAddReminder={addReminder} />
      <ReminderList items={reminders ?? []} onRemoveReminder={removeReminder} />
    </div>
  );
};

export default App;
