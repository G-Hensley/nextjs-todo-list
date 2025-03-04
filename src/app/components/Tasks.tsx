import { Task } from "../types";

export default function Tasks( { tasks, setTasks }: { tasks: Task[], setTasks: (tasks: Task[]) => void } ) {

    const handleCheckboxChange = (id: number) => {
        setTasks(tasks.map((task) => task.id === id ? {...task, completed: !task.completed} : task));
    }

    return (
        <div className="flex flex-col gap-2 items-center w-1/2 px-4">
            <h2 className="text-2xl font-bold">Tasks</h2>
            {tasks.map((task) => {
                return (
                    <div className="bg-slate-800 px-4 py-2 h-fit rounded-md flex flex-col gap-4 w-3/4" 
                    key={task.id}>
                        {task.completed ? <h2 className="text-lg font-bold text-center">Completed</h2> : ''}
                        <p className="text-md font-medium text-left text-wrap h-auto break-words">{task.text}</p>
                        <div className="flex flex-row w-full justify-around items-center">
                            <div className="flex flex-row gap-2 items-center">
                                <label htmlFor="Task Completed">Task Complete</label>
                                <input checked={task.completed} onChange={() => handleCheckboxChange(task.id)} type="checkbox" className="w-4 h-4 cursor-pointer" name="Task Completed"/>
                            </div>
                            <button 
                                className="bg-red-900 hover:bg-red-800 transition-colors p-2 rounded-md
                                text-center w-fit cursor-pointer self-center" onClick={() => {
                                setTasks(tasks.filter((t) => t.id !== task.id));
                            }}>Delete</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}