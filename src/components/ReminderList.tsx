import React, { useCallback } from "react";
import { Reminder } from "../models/reminder";

interface ReminderProps {
  items: Reminder[];
  onRemoveReminder: (id: number) => void;
}

const ReminderList = ({ items, onRemoveReminder }: ReminderProps) => {
  return (
    <ul className="list-group">
      {items?.map((item) => {
        const { id, title } = item;
        return (
          <li key={id} className="list-group-item">
            {title ?? ""}
            <button
              className="btn btn-outline-danger mx-5"
              onClick={() => onRemoveReminder(id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ReminderList;
