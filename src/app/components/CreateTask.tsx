'use client';

import { useState } from "react";
import { Task } from "../types";

export default function CreateTask( { tasks, setTasks }: { tasks: Task[], setTasks: (tasks: Task[]) => void } ) {
    const [text, setText] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (text.trim() === '') return;
        setTasks([...tasks, { id: tasks.length + 1, text, completed: false }]);
        setText('');
    }

    return (
        <form className="flex flex-col gap-3 items-center bg-slate-800 p-4 rounded-md" onSubmit={handleSubmit}>
            <label className="text-lg font-medium text-center" htmlFor="create-task">Create a new task</label>
            <input type="text" id="create-task" value={text} onChange={(e) => setText(e.target.value)}
            className="p-2 rounded-md bg-slate-700 text-white" />
            <button type="submit"
            className="bg-blue-800 text-white p-2 px-4 rounded-md hover:bg-blue-600 cursor-pointer transition-colors w-fit">
                Create
            </button>
        </form>
    )
}

