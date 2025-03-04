'use client';

import Tasks from '@/app/components/Tasks';
import CreateTask from '@/app/components/CreateTask';
import { Task } from './types';
import { useState, useEffect } from 'react';

const getTasks = () => {
  const storedTasks = localStorage.getItem('tasks');
  if (storedTasks) {
    return JSON.parse(storedTasks);
  }
  return [];
};

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    setTasks(getTasks());
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <main className='flex flex-col gap-8 p-4 items-center h-screen'>
      <header>
        <h1 className='text-4xl font-bold'>Todo List</h1>
      </header>
      <CreateTask tasks={tasks} setTasks={setTasks} />
      <Tasks tasks={tasks} setTasks={setTasks}/>
    </main>
  );
}
