import React, { useState } from 'react';

function TaskInput({ onAddTask }) {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task) {
      onAddTask(task);
      setTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a new task"
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskInput;
