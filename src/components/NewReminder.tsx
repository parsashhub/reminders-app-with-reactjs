import React, { useCallback, useState } from "react";

interface NewReminderProps {
  onAddReminder: (title: string) => void;
}

const NewReminder = ({ onAddReminder }: NewReminderProps): JSX.Element => {
  const [value, setValue] = useState("");

  const submitForm = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (!value) return;
      onAddReminder(value);
      setValue("");
    },
    [value]
  );

  return (
    <form onSubmit={submitForm}>
      <label htmlFor="title">Reminder</label>
      <input
        id="title"
        type="text"
        className="form-control"
        placeholder="add your reminder here"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button className="btn btn-primary my-4" disabled={!value}>
        {" "}
        Add Reminder
      </button>
    </form>
  );
};

export default NewReminder;
