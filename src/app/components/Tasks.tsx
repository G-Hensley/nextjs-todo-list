import { Task } from "../types";

export default function Tasks( { tasks }: { tasks: Task[] } ) {
    return (
        <div className="flex flex-col gap-2 items-center">
            <h2 className="text-2xl font-bold">Tasks</h2>
            {tasks.map((task) => {
                return (
                    <div className="bg-slate-800 px-4 py-2 rounded-md text-center w-auto" key={task.id}>
                        <h2>{task.text}</h2>
                    </div>
                )
            })}
        </div>
    )
}