const tasks = [

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

]

const Tasks = () => {
  return (
    <>
        {tasks.map((task) => (
            <div>
                <h2>{task.text}</h2>
            </div>
        ))}
    </>
  )
}

export default Tasks