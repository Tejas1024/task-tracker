import React, { useState } from 'react';
import './App.css';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Task Tracker</h1>
        <TaskInput onAddTask={addTask} />
        <TaskList tasks={tasks} />
      </header>
    </div>
  );
}

export default App;

