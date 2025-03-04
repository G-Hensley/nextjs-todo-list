'use client';

import Tasks from "@/app/components/Tasks";
import CreateTask from "@/app/components/CreateTask";
import { Task } from "./types";
import { useState } from "react";

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  return (
    <main className='flex flex-col gap-8 p-4 items-center h-screen'>
      <header>
        <h1 className='text-4xl font-bold'>Todo List</h1>
      </header>
      <CreateTask tasks={tasks} setTasks={setTasks}/>
      <Tasks tasks={tasks}/>
    </main>
  );
}
