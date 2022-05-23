import {useState} from 'react'



const Tasks = () => {
    const [tasks, setTasks] = useState([
        
            {
                id: 1,
                text: 'Doctors Apointmnt',
                day: 'streda',
                reminder: true,
            },
            {
                id: 2,
                text: 'School',
                day: 'čtvrtek',
                reminder: true,
        
            },
            {
                id: 3,
                text: 'Food Shopping',
                day: 'pátek',
                reminder: false,
            }
        ]
    )



  return (
    <>
    {tasks.map((task) => (<h3 key={task.id}>{task.text}</h3>))}
    </>
  )
}
export default Tasks