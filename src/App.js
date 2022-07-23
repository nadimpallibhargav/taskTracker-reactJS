import { useState } from "react"
import Header from "./components/Header"
import Task from "./components/Tasks"

const App = () => {

  const [tasks, setTasks] = useState([

    {
        id: 1,
        text: 'Break fast',
        day: 'Feb 5th at 9:00pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Go to office',
        day: 'Feb 5th at 9:30pm',
        reminder: false,
    },
    {
        id: 3,
        text: 'meeting',
        day: 'Feb 5th at 11:00pm',
        reminder: true,
    },
    
  ])

  const deleteTask = (id) => {
    console.log('delete', id);

    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className="container">
      <Header />
      <Task tasks={tasks} onDelete={deleteTask} />
    </div>
  );
}

export default App;
