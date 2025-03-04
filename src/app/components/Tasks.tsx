import { Task } from "../types";

export default function Tasks( { tasks, setTasks }: { tasks: Task[], setTasks: (tasks: Task[]) => void } ) {
    return (
        <div className="flex flex-col gap-2 items-center">
            <h2 className="text-2xl font-bold">Tasks</h2>
            {tasks.map((task) => {
                return (
                    <div className="bg-slate-800 px-4 py-2 rounded-md text-center w-auto flex flex-col gap-4" key={task.id}>
                        <h2>{task.text}</h2>
                        <button 
                            className="bg-red-900 hover:bg-red-800 transition-colors p-2 rounded-md 
                            text-center w-fit cursor-pointer self-center" onClick={() => {
                            setTasks(tasks.filter((t) => t.id !== task.id));
                        }}>Delete</button>
                    </div>
                )
            })}
        </div>
    )
}